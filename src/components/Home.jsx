import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../components/Card';
import { fetchProducts } from '../services/api';
import { Link } from 'react-router-dom'; // <--- burda import et
import { FaMagic, FaThumbsUp, FaMoon } from "react-icons/fa";
export default function Home() {
  const [trendProducts, setTrendProducts] = useState([]);
  const [vipProducts, setVipProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      const all = res.data;
      setTrendProducts(all.filter(p => p.group === 'Buketlər' && !p.oldPrice));
      setVipProducts(all.filter(p => p.price > 400));
    });
  }, []);

  return (
    <div className="w-full py-12">
      {/* 🔹 Trend Məhsullar */}
      <div className="text-center mb-6">
        <h2 style={{ fontFamily: "'Dancing Script', cursive" }} className="text-4xl font-blond text-gray-900 mt-6">Trend məhsullar</h2>
        <div className="w-20 h-[2px] bg-cyan-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="relative max-w-[1150px] mx-auto px-6 mb-20">
        <button className="custom-trend-prev absolute top-[-50px] left-6 z-10 bg-cyan-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow">
          &#60;
        </button>
        <button className="custom-trend-next absolute top-[-50px] right-6 z-10 bg-cyan-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow">
          &#62;
        </button>

<Swiper
  slidesPerView={1}
  spaceBetween={10}
  navigation={{
    prevEl: '.custom-trend-prev',
    nextEl: '.custom-trend-next',
  }}
  modules={[Navigation]}
breakpoints={{
  0: { slidesPerView: 1, spaceBetween: 10 },
  480: { slidesPerView: 2, spaceBetween: 12 },
  768: { slidesPerView: 3, spaceBetween: 20 },
  1024: { slidesPerView: 4, spaceBetween: 20 },
}}

  className="mySwiper pt-10"
>


          {trendProducts.map((product) => (
   <SwiperSlide key={product.id}>
  <div className="w-full h-full flex justify-center">
    <Card product={product} onAddToCart={() => {}} />
  </div>
</SwiperSlide>


          ))}
        </Swiper>
      </div>

      {/* 🔸 VIP Məhsullar */}
      <div className="text-center mb-6">
        <h2 style={{ fontFamily: "'Dancing Script', cursive" }} className="text-3xl font-bold text-gray-900">Vip</h2>
        <div className="w-20 h-[2px] bg-cyan-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="relative max-w-[1150px] mx-auto px-6 mb-20">
        <button className="custom-vip-prev absolute top-[-50px] left-6 z-10 bg-cyan-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow">
          &#60;
        </button>
        <button className="custom-vip-next absolute top-[-50px] right-6 z-10 bg-cyan-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow">
          &#62;
        </button>

  <Swiper
  slidesPerView={1}
  spaceBetween={10}
  navigation={{
    prevEl: '.custom-trend-prev',
    nextEl: '.custom-trend-next',
  }}
  modules={[Navigation]}
 breakpoints={{
  0: { slidesPerView: 1, spaceBetween: 10 },
  480: { slidesPerView: 2, spaceBetween: 12 },
  768: { slidesPerView: 3, spaceBetween: 20 },
  1024: { slidesPerView: 4, spaceBetween: 20 },
}}

  className="mySwiper pt-10"
>

          {vipProducts.map((product) => (
        <SwiperSlide key={product.id}>
  <div className="w-full h-full flex justify-center">
    <Card product={product} onAddToCart={() => {}} />
  </div>
</SwiperSlide>

          ))}
        </Swiper>
      </div>

      {/* Xidmətlər bölməsi */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 style={{ fontFamily: "'Dancing Script', cursive " }} className="text-4xl font-bold text-gray-900  text-center mb-2">Xidmətlər</h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
          Xoşbəxt anların ömür boyu xatırlanması üçün tərtib və dizayn <br /> işlərini peşəkarlara həvalə edin.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="relative flex-1 rounded-lg overflow-hidden shadow-lg" style={{ minHeight: '300px' }}>
            <img
              src="/banner1.jpg"
              alt="Tədbirlər"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-2/5 bg-cyan-500 p-6 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-white mb-2 uppercase tracking-wide">TƏDBİRLƏR</h3>
              <p className="text-white text-sm mb-6">Korporativ, Toy, Yeni il və s.</p>
              <Link
                to="/xidmetler"
                className="inline-block text-white text-sm font-semibold border-b-2 border-white hover:border-transparent hover:text-cyan-300 transition-all duration-300"
              >
                Ətraflı
              </Link>
            </div>
          </div>

          <div className="relative flex-1 rounded-lg overflow-hidden shadow-lg" style={{ minHeight: '300px' }}>
            <img
              src="/banner2.jpg"
              alt="Dekor"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-2/5 bg-cyan-500 p-6 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-white mb-2 uppercase tracking-wide">DEKOR</h3>
              <p className="text-white text-sm mb-6">Arka, Fotozona, Bəzəklər və s.</p>
            <Link
  to="/xidmetler"
  className="inline-block text-white text-sm font-semibold border-b-[1px] border-white hover:border-transparent hover:text-cyan-300 transition-all duration-300"
>
  Ətraflı
</Link>

            </div>
          </div>
        </div>
      </section>


      <section className="max-w-5xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
    {/* Stil */}
    <div className="border border-gray-200 hover:border-cyan-500 transition-all duration-300 p-6 rounded-lg flex flex-col items-center">
      <FaMagic className="text-cyan-500 text-3xl mb-4" />
      <h3 className="text-lg font-semibold mb-1">Stil</h3>
      <p className="text-gray-600 text-sm">Bənzərsiz və xüsusi dizayn</p>
    </div>

    {/* Keyfiyyət */}
    <div className="border border-gray-200 hover:border-cyan-500 transition-all duration-300 p-6 rounded-lg flex flex-col items-center">
      <FaThumbsUp className="text-cyan-500 text-3xl mb-4" />
      <h3 className="text-lg font-semibold mb-1">Keyfiyyət</h3>
      <p className="text-gray-600 text-sm">Ən təravətli çiçəklər</p>
    </div>

    {/* 24/7 */}
    <div className="border border-gray-200 hover:border-cyan-500 transition-all duration-300 p-6 rounded-lg flex flex-col items-center">
      <FaMoon className="text-cyan-500 text-3xl mb-4" />
      <h3 className="text-lg font-semibold mb-1">24/7</h3>
      <p className="text-gray-600 text-sm">Fasiləsiz xidmət</p>
    </div>
  </div>
</section>

  <div className="text-center mb-12 mt-8">
          <h3
            className="text-5xl font-semibold mb-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Əlaqə
          </h3>
          <div className="w-20 h-[2px] bg-cyan-500 mx-auto mb-3 rounded-full "></div>
         <a
              href="tel:+994553502121"
              className="text-black mt-4 hover:text-blue-600 hidden sm:inline"
            >
              +99455 3502121
            </a>
          <p className="text-black font-medium  text-lg mt-4">Çatdırılma 24/7</p>
        </div>
    </div>
  );
}
