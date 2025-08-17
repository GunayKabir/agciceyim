import React, { useState } from "react";

function SifarisStatusu() {
  const [orderNumber, setOrderNumber] = useState("");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      {/* Başlıq */}
      <h1  style={{ fontFamily: "'Dancing Script', cursive" }} className="text-4xl md:text-4xl font-script font-bold text-black mb-3 ">
        Sifariş statusu
      </h1>
       <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-2"></div>

      {/* Açıklama */}
      <p className="mb-6 text-gray-600 text-base">
        Sifarişin nömrəsini daxil edib, statusunu yoxlaya bilərsiniz
      </p>

      {/* Input və Button */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Sifariş nömrəsi"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition">
          Yoxla
        </button>
      </div>

      {/* Açıqlama başlığı */}
      <div className="mb-2">
        <span className="text-black font-semibold border-b-8 border-cyan-400 pb-1 ">
          Açıqlamalar
        </span>
      </div>

      {/* Statuslar qutusu */}
<div className="bg-white border border-gray-300 rounded-lg p-6 mt-8 max-w-3xl mx-auto text-center text-[15px] text-gray-700 shadow-sm">
  <p className="mb-3"><strong className="text-gray-900">Yerləşdirilib</strong> - Sifariş sistemə yerləşdirilib</p>
  <p className="mb-3"><strong className="text-gray-900">Qəbul olunub</strong> - Sifariş menecer tərəfindən qəbul olunub</p>
  <p className="mb-3"><strong className="text-gray-900">Hazırlanır</strong> - Sifariş hal-hazırda hazırlanmaqdadır</p>
  <p className="mb-3"><strong className="text-gray-900">Təhvilə hazırdır</strong> - Sifariş hazırlanıb, yola salınmağı gözlənilir</p>
  <p className="mb-3"><strong className="text-gray-900">Göndərilib</strong> - Sifariş kuryerə verilib və yola salınıb</p>
  <p className="mb-3"><strong className="text-gray-900">Təhvil verilib</strong> - Sifariş ünvana çatdırılıb və təhvil verilib</p>
  <p className="mb-3"><strong className="text-gray-900">Ləğv edilib</strong> - Sifariş ləğv olunub</p>
</div>


    </div>
  );
}

export default SifarisStatusu;
