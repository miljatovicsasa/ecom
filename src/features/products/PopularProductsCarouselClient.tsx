"use client";

import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Product {
  id: string;
  sku: string;
  name: string;
  price: {
    regularPrice: {
      amount: {
        value: number;
        currency: string;
      };
    };
  };
  image: {
    url: string;
  };
}

interface Props {
  products: Product[];
}

export default function PopularProductsCarouselClient({ products }: Props) {
  const router = useRouter();
  const sliderRef = useRef<Slider | null>(null); // Ref za slider

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleClick = (sku: string) => {
    router.push(`/product/${sku}`);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", margin: "auto", mt: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
      >
        Most Popular Products
      </Typography>

      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <Box key={product.sku} sx={{ padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => handleClick(product.sku)}
            >
              <img
                src={product.image.url}
                alt={product.name}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "contain",
                  borderRadius: 8,
                  marginBottom: 15,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {product.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#333" }}>
                {product.price.regularPrice.amount.value}{" "}
                {product.price.regularPrice.amount.currency}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <IconButton
          onClick={() => sliderRef.current?.slickPrev()}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            color: "#333",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={() => sliderRef.current?.slickNext()}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            color: "#333",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
