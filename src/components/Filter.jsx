// components/Filter.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";

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

const Filter = ({ dropdowns, allProducts }) => {
  const { categorySlug, subSlug } = useParams();

  const countProductsForChild = (parentName, childName) => {
    return allProducts.filter(
      (p) =>
        slugify(p.group) === slugify(parentName) &&
        slugify(p.category) === slugify(childName)
    ).length;
  };

  return (
    <aside className="w-full md:w-60 p-4">
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
                          className={`block px-3 py-2 rounded hover:bg-blue-100 ${
                            categorySlug === parentSlug && subSlug === childSlug
                              ? "bg-blue-500 text-white"
                              : "text-gray-800"
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
            );
          })}
      </nav>
    </aside>
  );
};

export default Filter;
