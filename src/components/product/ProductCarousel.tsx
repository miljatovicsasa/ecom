'use client';
import { useState } from 'react';

interface ProductCarouselProps {
  images: string[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      <img
        src={images[currentImage]}
        alt="Product image"
        className="w-full max-w-lg"
      />
      <div className="flex mt-2 space-x-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className={`w-16 h-16 cursor-pointer border ${
              index === currentImage ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
