'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';
import './cart.css';

export default function CartTab() {
  const { cart, changeQuantity } = useCart();

  const handleClose = () => {
    document.body.classList.remove('showCart');
  };

  return (
    <div className="cartTab">
      <h1>Shopping Cart</h1>
      <div className="listCart">
{cart.map((item: any) => (
  <div key={item.id} className="item">
    <div className="img-container">
      <img src={item.image} alt={item.name} />
    </div>
    <div className="content">
      <div className="name">{item.name}</div>
      <div className="quantity">
        <span className="minus" onClick={() => changeQuantity(item.id, -1)}>-</span>
        <span>{item.quantity}</span>
        <span className="plus" onClick={() => changeQuantity(item.id, 1)}>+</span>
      </div>
    </div>
    <div className="totalPrice">₹{item.price * item.quantity}</div>
  </div>
))}
      </div>
      <div className="btn">
        <button className="close" onClick={handleClose}>CLOSE</button>
        <button className="checkOut">CHECK OUT</button>
      </div>
    </div>
  );
}