import React from "react";
import { useOutletContext } from "react-router-dom";

function Detail() {
  const { onAddToCart, product, count, setCount } = useOutletContext();

  if (!product) return <p>Məhsul tapılmadı</p>;

  return (
    <div className="flex flex-col md:flex-row bg-white px-6 md:px-12 py-10 gap-8 md:gap-10">
{/* Şəkil hissəsi */}
<div className="flex flex-col sm:flex-row items-start gap-4 w-full px-4">
  <div className="w-20 h-20 border rounded overflow-hidden flex-shrink-0 order-2 sm:order-1">
    <img
      src={product.img}
      alt="thumb"
      className="object-cover w-full h-full"
    />
  </div>

  <div className="w-full max-w-[360px] mx-auto h-80 rounded overflow-hidden order-1 sm:order-2">
    <img
      src={product.img}
      alt={product.name}
      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>




      {/* Məhsul məlumatları */}
      <div className="flex-1 max-w-full md:max-w-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-xl font-bold text-gray-900 mb-3 md:mb-0">
            {product.name} Kod: {product.code}
          </h1>
        </div>

        <div className="flex items-center gap-3 mt-1">
          {product.priceOld && (
            <span className="text-sm text-gray-500 line-through">
              {product.priceOld.toFixed(2)} ₼
            </span>
          )}
          <span
            className={`text-lg font-bold ${
              product.priceOld ? "text-red-600" : "text-gray-700"
            }`}
          >
            {product.price.toFixed(2)} ₼
          </span>
        </div>

        <p className="mt-4 text-sm">
          <span className="font-medium">Tərkib:</span> {product.description}
        </p>

        <div className="my-4 border-b border-gray-300" />

        {/* Say və səbət */}
       <div className="flex flex-col md:flex-row items-center md:items-start justify-center bg-white px-6 md:px-12 py-10 gap-8 md:gap-10">
          <div className="flex items-center border rounded self-start">
            <button
              onClick={() => setCount((c) => Math.max(1, c - 1))}
              className="px-3 py-1 hover:bg-gray-200"
            >
              -
            </button>
            <span className="px-4">{count}</span>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-3 py-1 hover:bg-gray-200"
            >
              +
            </button>
          </div>

          <button
            onClick={() =>
              onAddToCart && onAddToCart({ ...product, quantity: count })
            }
            className="bg-black text-white px-6 py-2 rounded hover:bg-cyan-300 transition"
          >
            Səbətə
          </button>
        </div>

        <div className="mt-6 flex gap-3 items-center">
          <img src="/5-pb.png" alt="Visa" className="h-6" />
          <img src="/5.png" alt="MasterCard" className="h-6" />
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Hal-hazırda baxış: <span className="font-medium">5 nəfər</span>
        </p>
      </div>
    </div>
  );
}

export default Detail;
