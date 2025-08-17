import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts, fetchDropdowns } from "../services/api";
import Card from "../components/Card";

function CategoryLayout ({ onAddToCart }) {
  const { categorySlug, subSlug } = useParams();

  const [dropdowns, setDropdowns] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    fetchDropdowns().then((res) => setDropdowns(res.data));
  }, []);

  useEffect(() => {
    fetchProducts().then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  useEffect(() => {
    if (!categorySlug) return;

    const filtered = allProducts.filter((item) => {
      const isMatchGroup = slugify(item.group || "") === categorySlug;
      const isMatchCategory = subSlug
        ? slugify(item.category || "") === subSlug
        : true;
      return isMatchGroup && isMatchCategory;
    });

    setProducts(filtered);
  }, [categorySlug, subSlug, allProducts]);

  const countProductsForChild = (parentName, childName) => {
    return allProducts.filter(
      (p) =>
        slugify(p.group) === slugify(parentName) &&
        slugify(p.category) === slugify(childName)
    ).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  {/* Layout: Mobilde dikey, md və yuxarıda yanaşı */}
  <div className="flex flex-col md:flex-row gap-8">
    
    {/* 🔹 Sidebar */}
    <aside className="w-full md:w-64">
      <nav>
        {dropdowns
          .filter((parent) => parent.children?.length > 0)
          .map((parent) => (
            <div key={parent.id} className="mb-6">
              <h2 className="flex items-center text-md font-semibold uppercase mb-2 text-gray-700">
                <span className="w-4 h-[1px] bg-gray-500 mr-2" />
                {parent.name}
              </h2>
              <ul className="space-y-1">
                {parent.children.map((child) => {
                  const parentSlug = slugify(parent.name);
                  const childSlug = slugify(child.name);
                  const isActive =
                    categorySlug === parentSlug && subSlug === childSlug;

                  return (
                    <li key={child.id}>
                      <Link
                        to={`/${parentSlug}/${childSlug}`}
                        className={`block px-4 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-cyan-600 text-white font-medium"
                            : "text-gray-700 hover:bg-cyan-100"
                        }`}
                      >
                        {child.name}
                        <span className="float-right text-sm font-light">
                          ({countProductsForChild(parent.name, child.name)})
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
      </nav>
    </aside>

    {/* 🔸 Məhsullar */}
    <main className="flex-1">
      {/* Başlıq və Breadcrumb */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-script text-gray-800 capitalize mb-1">
          {subSlug
            ? dropdowns
                .flatMap((d) => d.children || [])
                .find((child) => slugify(child.slug) === subSlug)?.name ||
              subSlug.replace(/-/g, " ")
            : dropdowns.find((d) => slugify(d.slug) === slugify(categorySlug))
                ?.name || "Kateqoriya"}
        </h1>
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-2" />

        <div className="text-sm text-gray-500">
          <Link to="/" className="text-base text-black hover:underline">
            Əsas səhifə
          </Link>{" "}
          &gt;{" "}
          {subSlug
            ? dropdowns
                .flatMap((d) => d.children || [])
                .find((child) => slugify(child.slug) === subSlug)?.name ||
              subSlug.replace(/-/g, " ")
            : dropdowns.find((d) => slugify(d.slug) === slugify(categorySlug))
                ?.name || ""}
        </div>
      </div>

      {/* Məhsul grid */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Məhsul tapılmadı.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </main>
  </div>
</div>

  );
}

export default CategoryLayout;
