// src/features/cart/CartItem.tsx
import React from 'react';

const CartItem = ({ item }: { item: any }) => (
  <div>
    <p>{item.productId} - {item.quantity}</p>
  </div>
);

export default CartItem;
