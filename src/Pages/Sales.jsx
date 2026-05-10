import React from 'react';
import clothes from '../Components/clothes.json'; 
import ProductCard from '../Components/ProductCard';
export default function Sales() {
  const saleProducts = clothes.filter(p => p.isSale === true || p.salePrice > 0);
  return (
    <div className="container mt-5 pt-5">
      <div className="bg-danger text-white text-center py-5 mb-5 shadow-sm">
        <h1 className="fw-bolder display-3 letter-spacing-2">SEASONAL SALE</h1>
        <p className="lead">UP TO 50% OFF ON SELECTED ITEMS</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <div className="border border-white p-2 px-3">
            <span className="d-block fw-bold fs-4">12</span>
            <span className="small">DAYS</span>
          </div>
          <div className="border border-white p-2 px-3">
            <span className="d-block fw-bold fs-4">08</span>
            <span className="small">HOURS</span>
          </div>
          <div className="border border-white p-2 px-3">
            <span className="d-block fw-bold fs-4">45</span>
            <span className="small">MINS</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h4 className="fw-bold m-0 text-uppercase">Sale Items ({saleProducts.length})</h4>
        <span className="text-muted small">Limited time offer</span>
      </div>
      <div className="row g-4">
        {saleProducts.length > 0 ? (
          saleProducts.map(item => (
            <div className="col-md-3" key={item.id}>
              <ProductCard item={item} />
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <h3 className="text-muted">No items currently on sale. Check back later!</h3>
          </div>
        )}
      </div>
    </div>
  );
}