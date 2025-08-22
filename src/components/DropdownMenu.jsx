import React from 'react';
import { Link } from 'react-router-dom';
import slugify from '../utils/slugify';

function DropdownMenu({ categorySlug, dropdowns, isActive }) {
  if (!isActive || !categorySlug || !dropdowns) return null;

  const normalizedCategorySlug = slugify(categorySlug);

  // 🔧 Əsas dəyişiklik: slug ilə müqayisə
  const parent = dropdowns.find(
    item => slugify(item.slug) === normalizedCategorySlug
  );

  if (!parent || !parent.children || parent.children.length === 0) return null;

  return (
    <>
    

    <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-gray-800 rounded shadow-md py-2 min-w-[200px] z-50">
      {/* Ana kateqoriyaya keçid */}
      <li key="all">
        <Link
          to={`/${slugify(parent.slug)}`}
          className="block px-4 py-2 font-semibold hover:bg-gray-100"
        >
          {parent.name}
        </Link>
      </li>

      {/* Alt kateqoriyalar */}
      {parent.children.map(child => (
        <li key={child.id || child.slug}>
          <Link
            to={`/${slugify(parent.slug)}/${slugify(child.slug)}`}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {child.name}
          </Link>
        </li>
      ))}
    </ul>
    </>
  );
}

export default DropdownMenu;
