'use client';
import React, { useRef, useState } from "react";
import "@/app/Order/order.css";
import emailjs from "@emailjs/browser";

export default function Order() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      alert(data.message);

      if (res.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
<>
    <div className="order-section">
      <div className="container">

        {/* Background Image */}
        <div className="image-wrapper">
          <img src="/image/B.jpg" alt="hero" />
        </div>
        <div className="content">
            <h1 data-content="WELCOME">WELCOME</h1>
        </div>

 {/*       <div className="glass card-1">
          <img src="/image/-1.jpg" />
          <div className="info">
            <h1>Top Material Sofa</h1>
            <p>Premium build with long-lasting comfort.</p>
          </div>
        </div>

        <div className="glass card-2">
          <img src="/image/ -3.jpg" />
          <div className="info">
            <h1>Race Sofa</h1>
            <p>Speed-inspired modern aesthetics.</p>
          </div>
        </div>

        <div className="glass card-4">
          <img src="/image/-4.jpg" />
          <div className="info">
            <h1>Techno Sofa</h1>
            <p>Minimal tech-driven design.</p>
          </div>
        </div>

        <div className="glass card-5">
          <img src="/image/-5.jpg" />
          <div className="info">
            <h1>Luxury Sofa</h1>
            <p>Elite comfort with royal finish.</p>
          </div>
        </div>*/}

      </div>
    </div>

   <div className="form-container">
    <div className="flow">
    <h1>Let's chat!</h1>
    <p>We'd love to chat, please provide your contact details and we'll be in touch as quickly as possible.</p>
    <img src="image/-1.jpg" alt="" />
  </div>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea name="message"dirName="message" value={formData.message} onChange={handleChange} required />
      </div>
    <div className="form-group">
      <input type="checkbox" id="privacy" />
      <label htmlFor="privacy" className="fine-print">I agree that my personal data will be processed in accordance with the <a href="#">Privacy Policy</a></label>
    </div>
    <button>Send Message</button>
  </form>
      </div>

    </>
  );
}
