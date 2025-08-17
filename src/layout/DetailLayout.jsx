import React, { useEffect, useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { fetchDropdowns, fetchProducts } from "../services/api";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ə/g, "e")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ç/g, "c")
    .replace(/ş/g, "s")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

function DetailLayout({ onAddToCart }) {
  const { id } = useParams();
  const [dropdowns, setDropdowns] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState(null);

  // ✅ Say üçün state
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchDropdowns().then((res) => setDropdowns(res.data));
    fetchProducts().then((res) => {
      setAllProducts(res.data);
      const found = res.data.find((p) => p.id === +id);
      setProduct(found);
    });
  }, [id]);

  const countProductsForChild = (parentName, childName) =>
    allProducts.filter(
      (p) =>
        slugify(p.group) === slugify(parentName) &&
        slugify(p.category) === slugify(childName)
    ).length;

 return (
    <div className="flex flex-col lg:flex-row gap-6 px-6 md:px-12 lg:px-36 py-2 min-h-screen bg-white">
      {/* Main Content (solda qalır, kiçik ekranda üst hissədə) */}
      <main className="flex-1 p-4 md:p-6 rounded">
        <Outlet context={{ onAddToCart, product, count, setCount }} />
      </main>

      {/* Sidebar sağda (kiçik ekranlarda aşağıda) */}
      <aside className="w-full lg:w-60 p-4 rounded mt-8 lg:mt-12">
        <nav>
          {dropdowns
            .filter((parent) => parent.children && parent.children.length > 0)
            .map((parent) => {
              const parentSlug = slugify(parent.name);
              return (
                <div key={parent.id} className="mb-4">
                  <h2 className="flex items-center text-md font-bold uppercase mb-2">
                    <span className="w-5 h-px bg-gray-500 mr-2" />
                    {parent.name}
                  </h2>
                  <ul className="space-y-1">
                    {parent.children.map((child) => {
                      const childSlug = slugify(child.name);
                      return (
                        <li key={child.id}>
                          <Link
                            to={`/${parentSlug}/${childSlug}`}
                            className="block px-3 py-2 rounded hover:bg-blue-100 text-gray-800"
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
              );
            })}
        </nav>
      </aside>
    </div>
  );
}

export default DetailLayout;
