import React from 'react';
import { Link } from 'react-router-dom';
export default function ProductCard({ item }) {
  return (
    <div className="col-md-3 mb-4">
      <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
        <div className="card border-0 shadow-sm h-100">
         <img 
  src={`${window.location.origin}/${item.image}`} 
  className="card-img-top rounded-0" 
  alt={item.name} 
  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x400?text=Image+Not+Found'; }}
/>
          <div className="card-body text-center">
            <h6 className="fw-bold mb-1">{item.name}</h6>
            <p className="text-muted small">${item.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}