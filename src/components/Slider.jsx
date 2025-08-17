import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Slider() {
  const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];

  return (
    <div className="w-screen"> {/* Ekranın tam enində */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="w-full aspect-[21/9] md:aspect-[16/9] lg:aspect-[14/5]">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
