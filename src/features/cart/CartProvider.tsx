// src/features/cart/CartProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import { GET_CART_ITEMS } from './graphql/queries';
import { useQuery } from '@apollo/client';

interface CartContextType {
  cart: any;
  setCart: React.Dispatch<any>;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error } = useQuery(GET_CART_ITEMS);
  const [cart, setCart] = useState(data?.cart || []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {loading ? <p>Loading...</p> : error ? <p>Error loading cart</p> : children}
    </CartContext.Provider>
  );
};
