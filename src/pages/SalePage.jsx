import React, { useEffect, useState } from "react";
import { fetchProducts, fetchDropdowns } from "../services/api";
import slugify from "../utils/slugify";

import { Link } from "react-router-dom";
import Card from "../components/Card";

function SalePage({ onAddToCart }) {
  const [dropdowns, setDropdowns] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchDropdowns().then((res) => setDropdowns(res.data));
    fetchProducts().then((res) => {
      const filtered = res.data.filter((p) => p.priceOld); // yalnız endirimli
      setProducts(filtered);
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-16 ">
      {/* Sidebar */}
          <aside className="hidden md:block md:w-60 p-4 mt-6">
        <nav>
          {dropdowns
            .filter((parent) => parent.children?.length > 0)
            .map((parent) => (
              <div key={parent.id} className="mb-4">
                <h2 className="flex items-center text-md font-bold uppercase mb-2">
                  <span className="w-5 h-px bg-gray-500 mr-2" />
                  {parent.name}
                </h2>
                <ul className="space-y-1">
                  {parent.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        to={`/${slugify(parent.name)}/${slugify(child.name)}`}
                        className="block px-3 py-2 rounded hover:bg-blue-100 text-gray-800"
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </nav>
      </aside>

      {/* Məhsullar */}
      <main className="flex-1 py-6 px-4 md:px-8 py-6 ">
        <div className="text-center mb-6">
          <h1  style={{ fontFamily: "'Dancing Script', cursive" }} className="text-5xl md:text-4xl font-script font-bold  text-black mb-2">Endirimlər</h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-2"></div>
          <div className="text-sm text-gray-500">
            <Link to="/" className="text-base text-black hover:underline">Əsas səhifə</Link> &gt; Endirimlər
          </div>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">Hazırda endirimli məhsul yoxdur.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {products.map((product) => (
              <Card key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default SalePage;
