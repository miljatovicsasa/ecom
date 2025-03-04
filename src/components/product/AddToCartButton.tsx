'use client';

import { useCart } from '@/store/cart';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart({ ...product, quantity: 1 })}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Add to Cart
    </button>
  );
}
