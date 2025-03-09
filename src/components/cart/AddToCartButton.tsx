"use client";

import { Button } from "@mui/material";

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton = ({ onClick }: AddToCartButtonProps) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    Add to Cart
  </Button>
);

export default AddToCartButton;
