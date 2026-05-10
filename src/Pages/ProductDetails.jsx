import React, { useState } from 'react';
import clothes from '../Components/clothes.json';
import ProductCard from '../Components/ProductCard'; 
export default function Shop() {
  const [filter, setFilter] = useState("All");
  const filteredProducts = filter === "All" 
    ? clothes 
    : clothes.filter(p => p.category.toLowerCase() === filter.toLowerCase());
  return (
    <div className="container mt-5 pt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">SHOP ALL</h1>
      </div>
      <div className="d-flex justify-content-center gap-3 mb-5">
        {["All", "Men", "Women", "Kids"].map(cat => (
          <button 
            key={cat}
            className={`btn rounded-0 ${filter === cat ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredProducts.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}