import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const komponentler = [
  { id: 1, name: 'Anturaj 1', price: 4.0, image: '/Anturaj/a1.png' },
  { id: 2, name: 'Anturaj 2', price: 4.0, image: '/Anturaj/a2.jpg' },
  { id: 3, name: 'Anturaj 3', price: 2.0, image: '/Anturaj/a3.jpg' },
  { id: 4, name: 'Anturaj 4', price: 4.0, image: '/Anturaj/a4.jpg' },
  { id: 5, name: 'Anturaj 5', price: 4.0, image: '/Anturaj/a5.jpg' },
];


const komponentler2 = [
  { id: 101, name: 'Lent', price: 5.0, image: '/baglama/b1.png' },
  { id: 102, name: 'Ürək qutu', price: 10.0, image: '/baglama/b2.png' },
  { id: 103, name: 'Silindr Qutu', price: 10.0, image: '/baglama/b3.png' },
  { id: 104, name: 'Kvadrat Qutu', price: 10.0, image: '/baglama/b4.png' },
  { id: 104, name: 'Taxta yeşik Qutu', price: 10.0, image: '/baglama/b5.png' },
];


function BuketYarat({ onAddToCart, openBasket}) {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [counts, setCounts] = useState({});
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleCountChange = (id, delta) => {
    setCounts((prev) => {
      const newCount = Math.max((prev[id] || 1) + delta, 1);
      return { ...prev, [id]: newCount };
    });
  };
  

      const prevRef2 = useRef(null);
      const nextRef2 = useRef(null);


    const addToCart = (komponent) => {
    const quantity = counts[komponent.id] || 1;
    const updated = [...cart];
    const exist = updated.find((item) => item.id === komponent.id);
    if (exist) {
      exist.quantity += quantity;
    } else {
      updated.push({ ...komponent, quantity });
    }
    setCart(updated);
  };

  const handleQtyChange = (id, delta) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
        : item
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h1 style={{ fontFamily: "'Dancing Script', cursive" }} className="text-4xl font-bold text-black mb-2">
        Online konstruktor
      </h1>
      <p className="text-sm text-gray-600 mb-4">
        Öz zövqünüzə uyğun unikal buketinizi yaradın
      </p>

      {/* Başlıqlar */}
      <p className="relative inline-block text-l text-gray-800 font-bold mt-6 mb-6">
        <span className="relative z-10">İstifadə qaydaları</span>
        <span className="absolute bottom-0 left-0 w-full h-2 bg-cyan-300 z-0 rounded-sm"></span>
      </p>
      <div className="flex items-center justify-center mb-2 mt-20">
        <span className="w-10 h-px bg-cyan-300 mr-2"></span>
        <span className="text-2xl font-bold text-gray-700">Güllər</span>
        <span className="w-10 h-px bg-cyan-300 ml-2"></span>
      </div>
      <div className="flex items-center justify-center mt-20">
        <span className="w-10 h-px bg-cyan-300 mr-2"></span>
        <span className="text-2xl font-bold text-gray-700">Anturaj</span>
        <span className="w-10 h-px bg-cyan-300 ml-2"></span>
      </div>

      {/* Swiper */}
      <div className="relative max-w-[1150px] mx-auto px-6 mb-20 mt-24">
        <button
          ref={prevRef}
          className="absolute top-[-50px] left-6 z-10 bg-cyan-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow"
        >
          &#60;
        </button>
        <button
          ref={nextRef}
          className="absolute top-[-50px] right-6 z-10 bg-cyan-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow"
        >
          &#62;
        </button>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper pt-10"
        >
          {komponentler.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded shadow text-center p-4">
                <img src={item.image} alt={item.name} className="h-24 mx-auto mb-3" />
                <div className="font-medium text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-500 mb-2 mt-2">{item.price.toFixed(2)}₼</div>

                {/* Sayğac */}
<div className="flex items-center justify-center mt-4 mb-3">
  <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
    {/* Sol ox */}
    <button
      onClick={() => handleCountChange(item.id, -1)}
      className="p-2 rounded-full hover:bg-cyan-300 transition-colors"
    >
      <FiChevronLeft size={18} />
    </button>

    {/* Say */}
    <span className="mx-3 w-4 text-center text-sm font-medium">
      {counts[item.id] || 0}
    </span>

    {/* Sağ ox */}
    <button
      onClick={() => handleCountChange(item.id, 1)}
      className="p-1 rounded-full hover:bg-cyan-300 transition-colors"
    >
      <FiChevronRight size={18} />
    </button>
  </div>
</div>



                <button
                  className="bg-cyan-500 text-white text-sm px-6 py-2 mt-2 rounded-full hover:bg-cyan-600"
                  onClick={() => {
                    addToCart(item);
                    setShowModal(true);
                  }}
                >
                  Əlavə et
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* Başlıq */}
<div className="flex items-center justify-center mt-20">
  <span className="w-10 h-px bg-cyan-300 mr-2"></span>
  <span className="text-2xl font-bold text-gray-700">Bağlama</span>
  <span className="w-10 h-px bg-cyan-300 ml-2"></span>
</div>

{/* Swiper for Bağlama */}
<div className="relative max-w-[1150px] mx-auto px-6 mb-20 mt-10">

  {/* < > düymələri */}
  <button
    ref={prevRef2}
    className="absolute top-[-50px] left-6 z-10 bg-cyan-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow hover:bg-cyan-300 transition"
  >
    &#60;
  </button>
  <button
    ref={nextRef2}
    className="absolute top-[-50px] right-6 z-10 bg-cyan-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow hover:bg-cyan-300 transition"
  >
    &#62;
  </button>

  <Swiper
  slidesPerView={1.2}
  spaceBetween={20}
  navigation={{
    prevEl: prevRef2.current,
    nextEl: nextRef2.current,
  }}
  onInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef2.current;
    swiper.params.navigation.nextEl = nextRef2.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }}
  modules={[Navigation]}
  breakpoints={{
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
  className="mySwiper pt-10"
>
  {komponentler2.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="bg-white rounded shadow text-center p-4">
        <img src={item.image} alt={item.name} className="h-24 mx-auto mb-3" />
        <div className="font-medium text-gray-800">{item.name}</div>
        <div className="text-sm text-gray-500 mb-2 mt-2">{item.price.toFixed(2)}₼</div>

        {/* Sayğac */}
        <div className="flex items-center justify-center mt-4 mb-3">
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
            <button
              onClick={() => handleCountChange(item.id, -1)}
              className="p-2 rounded-full hover:bg-cyan-300 transition-colors"
            >
              <FiChevronLeft size={18} />
            </button>
            <span className="mx-3 w-4 text-center text-sm font-medium">
              {counts[item.id] || 0}
            </span>
            <button
              onClick={() => handleCountChange(item.id, 1)}
              className="p-1 rounded-full hover:bg-cyan-300 transition-colors"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        <button
          className="bg-cyan-500 text-white text-sm px-6 py-2 mt-2 rounded-full hover:bg-cyan-600"
          onClick={() => {
            addToCart(item);
            setShowModal(true);
          }}
        >
          Əlavə et
        </button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

</div>



      {/* Cart Button */}
      {cart.length > 0 && (
        <button
          className="fixed bottom-20 right-6 w-14 h-14 rounded-full bg-cyan-300 text-white text-2xl shadow-lg hover:bg-cyan-400 z-50"
          onClick={() => setShowModal(true)}
        >
          🛒
        </button>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-lg p-6 relative">
            <button
              className="absolute top-2 right-3 text-gray-600 text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Online konstruktor</h2>
            {cart.length === 0 ? (
              <p>Səbət boşdur.</p>
            ) : (
              <>
             <table className="w-full mb-4 text-left text-sm">
  <thead className="border-b">
    <tr>
      <th></th>
      <th>Komponent</th>
      <th>Qiymət</th>
      <th>Miqdar</th>
      <th>Məbləğ</th>
    </tr>
  </thead>
  <tbody>
    {cart.map((item) => (
      <tr key={item.id} className="border-b">
        <td>
          <button onClick={() => removeItem(item.id)} className="text-red-500">🗑</button>
        </td>
        <td>{item.name}</td>
        <td>{item.price.toFixed(2)}₼</td>
        <td>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleQtyChange(item.id, -1)}
              className="px-2 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => handleQtyChange(item.id, 1)}
              className="px-2 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
        </td>
        <td>{(item.price * item.quantity).toFixed(2)}₼</td>
      </tr>
    ))}
  </tbody>
</table>

                <div className="text-right font-semibold mb-4">
                  Ümumi məbləğ: {total.toFixed(2)}₼
                </div>
    <button
  className="w-full py-2 bg-black text-white rounded hover:bg-gray-800"
  onClick={() => {
    const customImage = "/custom_img.jpg";

    cart.forEach((item) =>
      onAddToCart({ ...item, img: customImage }) // hər məhsulun şəkilini dəyiş
    );

    setShowModal(false);  // modal bağlansın
    openBasket();         // əsas səbət modalı açılsın
  }}
>
  Səbətə əlavə et
</button>


              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default BuketYarat;
