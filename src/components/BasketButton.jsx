// components/BasketButton.jsx
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

function BasketButton({ itemCount, onClick }) {
  return (
   <button
      aria-label="Cart"
      onClick={onClick}
      className="relative text-gray-700 hover:text-blue-600"
    >
      <FaShoppingCart className="w-8 h-8" />
      {itemCount > 0 && (
        <span className="absolute -top-2 right-0 w-4 h-4 bg-red-600 text-white text-xs text-center rounded-full">
          {itemCount}
        </span>
      )}
    </button>
  );
}

export default BasketButton;
