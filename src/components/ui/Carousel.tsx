'use client';

import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonRounded from './ButtonRounded';
import { NextArrow, PrevArrow } from './ArrowButtonCarousel';
import { colors } from '@/theme/theme';

const promotionsInfo = [
  {
    title: 'Mickey Thompson Rebates',
    dates: 'February 15th - March 31st 2025',
    image: '/images/crousel_promotion_first.jpg',
    buttonLabel: 'VIEW OFFER',
  },
  {
    title: 'General Tires Rebates',
    dates: 'March 1st - April 30th 2025',
    image: '/images/crousel_promotion_second.jpg',
    buttonLabel: 'VIEW OFFER',
  },
  {
    title: 'Hankook: Save $200 On Seats of 4',
    dates: '25th January - 31st March 2025',
    image: '/images/crousel_promotion_third.jpg',
    buttonLabel: 'BROWSE TIRES',
  },
  {
    title: 'Pirelli: Save $200 On Seats of 4',
    dates: '25th January - 31st March 2025',
    image: '/images/crousel_promotion_fourth.jpg',
    buttonLabel: 'BROWSE TIRES',
  },
  {
    title: 'Goodyear: Save $200 On Seats of 4',
    dates: '25th January - 31st March 2025',
    image: '/images/crousel_promotion_fifth.jpg',
    buttonLabel: 'BROWSE TIRES',
  },
  {
    title: 'Nexen: Save $200 On Seats of 4',
    dates: '25th January - 31st March 2025',
    image: '/images/crousel_promotion_sixt.jpg',
    buttonLabel: 'BROWSE TIRES',
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
        {promotionsInfo.map((promo, index) => (
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
              src={promo.image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 2, fontWeight: 'bold' }}
            >
              {promo.title}
            </Typography>

            <ButtonRounded label={promo.buttonLabel} />

            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 2, fontSize: '1rem' }}
            >
              {promo.dates}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
