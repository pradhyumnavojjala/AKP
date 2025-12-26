'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';
import './cart.css';
import { useRouter } from 'next/navigation';

export default function CartTab() {
  const { cart, changeQuantity } = useCart();

  const router = useRouter();
  
  const handleClose = () => {
    document.body.classList.remove('showCart');
  };

  return (
    <div className="cartTab">
      <h1>Shopping Cart</h1>
      <div className="listCart">
{cart.map((item: any) => (
  <div key={item.id} className="summary-item">
    <div className="summary-left">
      <img src={item.image} alt={item.name} />
      <div>
        <p className="title">{item.name}</p>
        <div className="quantity">
        <span className="minus" onClick={() => changeQuantity(item.id, -1)}>-</span>
        <span>{item.quantity}</span>
        <span className="plus" onClick={() => changeQuantity(item.id, 1)}>+</span>
      </div>
        <span>Qty: {item.quantity}</span>
      </div>
    </div>
    <span className="price">₹{item.price * item.quantity}</span>
  </div>
))}
      </div>
      <div className="btn">
        <button className="close" onClick={handleClose}>CLOSE</button>
        <button
  className="checkOut"
  onClick={() => {
    document.body.classList.remove("showCart");
    router.push("/checkout");
  }}
>
  CHECK OUT
</button>
      </div>
    </div>
  );
}