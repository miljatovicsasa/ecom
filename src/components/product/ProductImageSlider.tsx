"use client";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface ProductImageSliderProps {
  images: { url: string }[];
}

const ProductImageSlider = ({ images }: ProductImageSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Box sx={{ width: "100%", maxWidth: "500px", margin: "auto", mt: 4 }}>
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        style={{ width: "100%", height: "auto" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={`Product image ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "5px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        style={{ marginTop: "10px" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "100%",
                height: "60px",
                objectFit: "cover",
                borderRadius: "5px",
                cursor: "pointer",
                border: "2px solid transparent",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductImageSlider;
