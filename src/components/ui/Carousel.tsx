'use client';

import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonRounded from './ButtonRounded';
import { NextArrow, PrevArrow } from './ArrowButtonCarousel';
import { colors } from '@/theme/theme';

interface CarouselItem {
  title?: string;
  dates?: string;
  image: string;
  buttonLabel?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  slidesToShow = 3,
  slidesToScroll = 2,
  infinite = false,
}) => {
  const settings = {
    dots: true,
    infinite,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', margin: 'auto', mt: 4 }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              padding: '0 13.5px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            {item.title && (
              <Typography
                variant="h6"
                align="center"
                sx={{ mt: 2, fontWeight: 'bold' }}
              >
                {item.title}
              </Typography>
            )}

            {item.buttonLabel && <ButtonRounded label={item.buttonLabel} />}

            {item.dates && (
              <Typography
                variant="h6"
                align="center"
                sx={{ mt: 2, fontSize: '1rem' }}
              >
                {item.dates}
              </Typography>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
