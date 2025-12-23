'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import products from '../../../../public/products.json';
import './style.css';
import { useCart } from '@/context/CartContext'; 

export default function Page() {
  const { id } = useParams();
  const { addToCart } = useCart(); 

  // Use one consistent variable name
  const product = products.find(p => String(p.id) === String(id));

  if (!product) {
    return <div className="container">Product Not Found</div>;
  }

  const relatedProducts = products.filter(p => String(p.id) !== String(id));

  const handleAddToCart = () => {
    console.log("Adding to cart:", product.name);
    addToCart(product);
    
    // Logic to open the sidebar (explained below)
    document.body.classList.add('showCart');
  };

  return (
    <div className="container">
      <div className="title">PRODUCT DETAIL</div>

      <div className="detail">
        <div className="image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="content">
          <h1 className="name">{product.name}</h1>
          <div className="price">₹ {product.price}</div>

          <div className="buttons">
            <button>Checkout</button>
            <button className="addCart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className="description">{product.description}</div>
        </div>
      </div>

      <div className="title">RELATED PRODUCTS</div>
      <div className="listProduct">
        {relatedProducts.map(p => (
          <Link key={p.id} href={`/Sofa/${p.id}`} className="item">
            <img src={p.image} alt={p.name} />
            <h2>{p.name}</h2>
            <div className="price">₹ {p.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}