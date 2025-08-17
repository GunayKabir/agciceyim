import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts, fetchDropdowns } from "../services/api";

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/ə/g, "e")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ç/g, "c")
    .replace(/ş/g, "s")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

function SubcategoryPage() {
  const { categorySlug, subSlug } = useParams();
  const [dropdowns, setDropdowns] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchDropdowns().then(res => setDropdowns(res.data));
    fetchProducts().then(res => setAllProducts(res.data));
  }, []);

useEffect(() => {
  console.log("categorySlug:", categorySlug);
  console.log("subSlug:", subSlug);
  console.log("Sample products:", allProducts.map(p => ({
    group: p.group,
    category: p.category,
    groupSlug: slugify(p.group),
    categorySlug: slugify(p.category),
  })));
}, [categorySlug, subSlug, allProducts]);


  useEffect(() => {
    if (!categorySlug || !subSlug || allProducts.length === 0) {
      setProducts([]);
      return;
    }

    const filtered = allProducts.filter(item =>
      slugify(item.group) === categorySlug &&
      slugify(item.category) === subSlug
    );
    setProducts(filtered);
  }, [categorySlug, subSlug, allProducts]);

  const currentParent = dropdowns.find(d => d.slug === categorySlug);

  const countProductsForChild = (childSlug) =>
    allProducts.filter(p =>
      slugify(p.group) === categorySlug && slugify(p.category) === childSlug
    ).length;

  return (
    <div className="flex gap-6 px-4 py-6">
      <aside className="w-60 bg-gray-100 p-4 rounded shadow-sm">
        <h2 className="uppercase font-bold mb-2">{currentParent?.name}</h2>
        <ul>
          {currentParent?.children.map(child => (
            <li key={child.id}>
              <Link
                to={`/${categorySlug}/${child.slug}`}
                className={subSlug === child.slug ? "font-semibold" : ""}
              >
                {child.name} ({countProductsForChild(child.slug)})
              </Link>
            </li>
          )) || <li>Kategoriya tapılmadı</li>}
        </ul>
      </aside>

      <main className="flex-1">
        {products.length === 0 ? (
          <p>Məhsul tapılmadı.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {products.map(p => (
  <Link
    key={p.id}
    to={`/${slugify(p.group)}/${slugify(p.category)}/${p.id}`}
    className="border p-3 rounded hover:shadow transition block"
  >
    <img src={p.img} alt={p.name} className="h-40 w-full object-cover" />
    <h3 className="mt-2 font-semibold text-sm">{p.name}</h3>
    <p className="text-blue-600 font-bold">{p.price} ₼</p>
  </Link>
))}

          </div>
        )}
      </main>
    </div>
  );
}

export default SubcategoryPage;
