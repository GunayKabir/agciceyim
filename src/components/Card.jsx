import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal"; 

function Card({ product, onAddToCart }) {
  const navigate = useNavigate();
 
  const [showLoginModal, setShowLoginModal] = useState(false); // 🔓 Modalı idarə edən state

  const goToDetail = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <>
      {/* 💳 Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
<div
  className="w-full rounded-lg shadow-md bg-white text-gray-800 border relative cursor-pointer"
  onClick={goToDetail}
>






        {product.priceOld && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            Endirim
          </div>
        )}

        {/* ❤️ Favoritə klik – login modalını açır */}
        <button
          className="absolute top-2 right-2 p-1 rounded-full bg-cyan-500 text-white hover:bg-cyan-600"
          aria-label="Favoritə əlavə et"
          onClick={(e) => {
            e.stopPropagation();
            setShowLoginModal(true); // modalı aç
          }}
        >
          <FiHeart className="h-5 w-5" />
        </button>
<img
  src={product.img}
  alt={product.name}
  className="object-cover object-center w-full rounded-t-lg h-64"
/>



<div className="flex flex-col justify-between p-3 space-y-3">
  <div className="space-y-1">
    <div className="flex items-center justify-between">
      <h2 className="text-base text-grey-700 ">
        {product.name} kod: {product.code}
      </h2>
    </div>

    {/* 💰 Qiymət hissəsi */}
    <div className="text-center w-full mt-2">
      {product.priceOld ? (
        <>
          <p className="text-sm line-through text-gray-500">
            {product.priceOld} ₼
          </p>
          <p className="text-red-600 text-md font-bold">
            {product.price} ₼
          </p>
        </>
      ) : (
        <p className="text-black text-md font-bold">
          {product.price} ₼
        </p>
      )}
    </div>
  </div>

  {/*Səbətə əlavə et düyməsi */}
<div className="flex justify-center">
<button
  type="button"
  onClick={(e) => {
    e.stopPropagation();
    onAddToCart(product);
  }}
  className="w-full px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold transition-colors duration-300"
>
  Səbətə
</button>

</div>


</div>
      </div>
    </>
  );
}

export default Card;
