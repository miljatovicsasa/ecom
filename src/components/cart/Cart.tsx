// src/features/cart/Cart.tsx
import React from 'react';
import { useCart } from '@/features/cart/CartProvider';
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.items?.map((item: CartItemType) => (
        <CartItem key={item.productId} item={item} />
      ))}
    </div>
  );
};

export default Cart;
