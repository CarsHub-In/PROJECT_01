"use client";
import React from "react";
import dynamic from "next/dynamic";
import type { SwiperProps } from "swiper/react";

// Dynamic imports with proper typing
const Swiper = dynamic(
  async () => {
    const { Swiper } = await import("swiper/react");
    return Swiper;
  },
  { ssr: false }
);

const SwiperSlide = dynamic(
  async () => {
    const { SwiperSlide } = await import("swiper/react");
    return SwiperSlide;
  },
  { ssr: false }
);

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageCarouselProps {
  images: string[];
  carBrand: string;
  carModel: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  carBrand,
  carModel,
}) => {
  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto h-[400px] bg-gray-200 rounded flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Swiper
        className="w-full"
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`${carBrand} ${carModel} - Image ${index + 1}`}
              className="w-full h-[400px] object-cover rounded"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
