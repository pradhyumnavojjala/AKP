'use client';

import React from 'react';
import Link from 'next/link';
import products from '../../../public/products.json';
import '../Sofa/[id]/style.css';

export default function Page() {
  return (
    <div className="container">
      <div className="title">PRODUCT LIST</div>

      <div className="listProduct">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/Sofa/${product.id}`}
            className="item"
          >
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <div className="price">₹ {product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
