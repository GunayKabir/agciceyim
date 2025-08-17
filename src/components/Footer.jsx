import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-10 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Əlaqə hissəsi */}
      

        {/* Sosial hissə */}
        <div className="text-center mb-10">
          <h3
            className="text-3xl font-semibold mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Bizi izləyin
          </h3>
          <div className="flex justify-center space-x-6 text-[24px]">
            <a
              href="https://www.facebook.com/agciceyim.az/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-cyan-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/agciceyim/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-cyan-500 hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@agciceyim"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-cyan-500 hover:text-white transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Alt hissə */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-center items-center md:items-start text-base gap-6 md:gap-10">
          {/* Sol */}
          <div className="text-center md:text-left ">
            © 2021-2025 Ağ Çiçəyim <span className="font-semibold">A2Studio</span> tərəfindən yaradılıb
          </div>

          {/* Sağ */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
            {/* Linklər */}
            <div className="flex space-x-8 text-lg">
              <Link
                to="/catdirilma" 
                className="hover:text-cyan-500 transition-colors"
              >
                Çatdırılma və ödəniş
              </Link>
              <Link
                to="/filiallar"
                className="hover:text-cyan-500 transition-colors"
              >
                Filiallar
              </Link>
              <Link
                to="/statuslar"
                className="hover:text-cyan-500 transition-colors"
              >
                Statuslar
              </Link>
            </div>

            {/* Ödəniş şəkilləri */}
            <div className="flex space-x-3 mt-1">
              <img src="/5.png" alt="Visa" className="h-6" />
              <img src="/5-pb.png" alt="PashaBank" className="h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Qırmızı chat düyməsi */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-red-500 text-white rounded-full w-12 h-12 shadow-lg text-xl hover:bg-red-600 transition"
        aria-label="Chat"
      >
        💬
      </button>
    </footer>
  );
}

export default Footer;
