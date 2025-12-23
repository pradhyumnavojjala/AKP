'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  // Load cart from local storage on startup
  useEffect(() => {
    const savedCart = localStorage.getItem('sofaCart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem('sofaCart', JSON.stringify(cart));
  }, [cart]);

const changeQuantity = (productId: any, type: number) => {
  setCart((prev) => {
    return prev
      .map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + type;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      })
      .filter((item) => item !== null); // Remove item if quantity is 0
  });
};

const addToCart = (product: any) => {
  setCart((prev) => {
    const existingItem = prev.find((item) => item.id === product.id);
    if (existingItem) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
};

  return (
  <CartContext.Provider value={{ cart, addToCart, changeQuantity }}>
    {children}
  </CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);