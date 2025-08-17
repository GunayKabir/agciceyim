import React from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu({ categorySlug, dropdowns, isActive }) {
  if (!isActive || !categorySlug || !dropdowns) return null;

  const parent = dropdowns.find(item => item.slug === categorySlug);

  if (!parent || !parent.children || parent.children.length === 0) return null;

  return (
    <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-gray-800 rounded shadow-md py-2 min-w-[200px] z-50">
      <li key="all">
        <Link
          to={`/${parent.slug}`}
          className="block px-4 py-2 font-semibold hover:bg-gray-100"
        >
          {parent.name}
        </Link>
      </li>
      {parent.children.map(child => (
        <li key={child.id || child.slug}>
          <Link
            to={`/${parent.slug}/${child.slug}`}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {child.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
