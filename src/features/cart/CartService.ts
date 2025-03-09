// src/features/cart/CartService.ts
interface CartItem {
    productId: string;
    quantity: number;
    price: number;
}

interface Cart {
    items: CartItem[];
}

export const addItemToCart = (cart: Cart, item: CartItem): CartItem[] => {
    const updatedCart = [...cart.items, item];
    return updatedCart;
};
  
export const removeItemFromCart = (cart: Cart, itemId: string): CartItem[] => {
    const updatedCart = cart.items.filter(item => item.productId !== itemId);
    return updatedCart;
};
