'use client';
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import "./checkout.css";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e: any) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer, cart }),
    });

    const data = await res.json();
    alert(data.message);
  };

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h1>Checkout</h1>

        <div className="grid">
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input name="email" placeholder="Email Address" onChange={handleChange} required />
          <textarea
            name="address"
            placeholder="Delivery Address"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">PLACE ORDER</button>
      </form>

      <div className="order-summary">
        <h2>Order Summary</h2>

        {cart.map((item: any) => (
          <div key={item.id} className="summary-item">
            <span>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <div className="summary-total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>
    </div>
  );
}
