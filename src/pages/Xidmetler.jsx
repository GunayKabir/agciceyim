import React, { useState } from 'react';

const tedbirSekilleri = Array.from({ length: 9 }, (_, i) => `/event/${i + 1}.jpg`);
const decorSekilleri = Array.from({ length: 9 }, (_, i) => `/decor/d${i + 1}.jpg`);

export default function Xidmetler() {
  const [activeTab, setActiveTab] = useState('tedbir');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const aktivSekiller = activeTab === 'tedbir' ? tedbirSekilleri : decorSekilleri;

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % aktivSekiller.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + aktivSekiller.length) % aktivSekiller.length);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto text-gray-800 font-sans relative">
      <h1
        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Xidmətlər
      </h1>
      <div className="w-20 h-[2px] bg-cyan-500 mx-auto mb-3 rounded-full"></div>
      <p className="text-center text-gray-600 mb-10">
        Xoşbəxt anların ömür boyu xatırlanması üçün tərtib və dizayn <br /> işlərini peşəkarlara həvalə edin.
      </p>

      <div className="mb-10">
        <h2
          style={{ fontFamily: "'Dancing Script', cursive" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        >
          Təklif olunan xidmətlər
        </h2>
        <p className="mb-4">
          Hər bir şənlik yaxud tədbir özünəməxsus atmosferi və məkanın eksklüziv dekorasiyası sayəsində xüsusi ola bilər.
        </p>
        <p className="mb-4">
          "Ağ Çiçəyim"-in geniş çeşidli məhsulları, bəzək əşyaları, aksessuarları, hədiyyələrı, eləcə də orijinal dizayn
          təklifləri, sizin və sevdiklərinizin önəmli anlarını heyrətamiz, unudulmaz bir şənliyə çevirəcək.
        </p>
        <p className="mb-4">
          Biz fərqli materiallardan hazırlanmış hər növ müasir dekorlar təqdim etməyə hazırıq. İşimizdə tekstil, təbii və süni
          çiçəklərdən, aksessuarlardan, çap materiallarından, işıqlı dekorlardan və s materiallardan istifadə olunur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div>
          <h3 className="text-xl font-semibold mb-3">Təklif etdiyimiz əsas tədbir növləri:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Toy salonunun bəzədilməsi</li>
            <li>Yubileylər, ad günləri</li>
            <li>Uşaq tədbirləri</li>
            <li>Korporativ</li>
            <li>Yeni il və digər bayramlar</li>
            <li>Rəsmi tədbirlər</li>
            <li>Sərgilər, mağaza açılışları və s.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Əsas dekorasiya növləri:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Yeni il ağacları və bəzəkləri</li>
            <li>Sarılar ilə dizayn</li>
            <li>Arka</li>
            <li>Fotozona</li>
            <li>Ad günü bəzəkləri, şənliklərinizi daha xüsusi etmək üçün və s. digər dekorlar</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mb-6 space-x-8">
        <button
          onClick={() => setActiveTab('tedbir')}
          className={`text-lg transition-all duration-300 ${
            activeTab === 'tedbir'
              ? 'text-gray-900 border-b-2 border-cyan-300'
              : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          Tədbirlər
        </button>
        <button
          onClick={() => setActiveTab('decor')}
          className={`text-lg transition-all duration-300 ${
            activeTab === 'decor'
              ? 'text-gray-900 border-b-2 border-cyan-300'
              : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          Dekor
        </button>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {aktivSekiller.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Şəkil ${i + 1}`}
            onClick={() => openModal(i)}
            className="w-full h-40 sm:h-48 object-cover rounded shadow cursor-pointer hover:opacity-80 transition"
          />
        ))}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={aktivSekiller[currentIndex]}
              alt={`Böyük şəkil ${currentIndex + 1}`}
              className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded"
            />

            <button
              onClick={closeModal}
              className="absolute top-1 right-3 sm:right-6 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
              aria-label="Bağla"
            >
              ✕
            </button>

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-3 sm:left-7 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-2 sm:p-3"
              aria-label="Əvvəlki şəkil"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute top-1/2 right-3 sm:right-7 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-2 sm:p-3"
              aria-label="Növbəti şəkil"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
