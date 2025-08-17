import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function SocialChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sosial ikonlar */}
      <div
        className={`fixed bottom-24 right-6 flex flex-col space-y-3 transition-all duration-300 ${
          open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
        }`}
      >
        <a
          href="tel:+994553502121"
          className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-white shadow-lg hover:bg-cyan-500 transition"
          aria-label="Call"
        >
          <FaPhone size={20} />
        </a>
        <a
          href="https://wa.me/994553502121"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="https://www.instagram.com/agciceyim/"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg hover:bg-purple-700 transition"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.facebook.com/agciceyim.az/"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition"
          aria-label="Facebook"
        >
          <FaFacebook size={20} />
        </a>
      </div>

      {/* Qırmızı chat düyməsi */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-red-500 text-white rounded-full w-12 h-12 shadow-lg text-xl hover:bg-red-600 transition"
        aria-label="Chat"
      >
        💬
      </button>
    </>
  );
}

export default SocialChatButton;
