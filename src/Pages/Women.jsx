import React from 'react'
import clothes from '../Components/clothes.json'

export default function Women() {
  const womenProducts = clothes.filter((item) => item.category === "women");
  const headings = ["NEW ARRIVALS", "TRENDING NOW", "SEASONAL FAVORITES"];
  return (
    <div className='container mt-5'>
      <h1 className="text-center fw-bold mb-5 "style={{ cursor: "pointer" }}>Women COLLECTION</h1>
      <div className='row g-4'>
        {womenProducts.map((item, index) => (
          <React.Fragment key={item.id}>
            {index % 4 === 0 && (
              <div className="col-12 mt-5 mb-3 text-center">
                <h2 className="fw-bold" style={{ letterSpacing: '2px' }}>
                  {headings[index / 4] || "COLLECTION"}
                </h2>
                <div style={{ width: '50px', height: '3px', backgroundColor: 'black', margin: '10px auto' }}></div>
              </div>
            )}
            <div className='col-md-3'>
              <div className='card-products'>
                <img src={item.image} className='card-img-top-products' alt={item.name} />
                {item.isSale && (
                  <span className="badge bg-danger position-absolute m-2" style={{top: 0, left: 0}}>
                    SALE
                  </span>
                )}
                <div className='card-body-products'>
                  <h5>{item.name}</h5>
                  {item.isSale ? (
                    <p>
                      <span className="text-danger fw-bold">${item.salePrice}</span>{" "}
                      <del className="text-muted small">${item.price}</del>
                    </p>
                  ) : (
                    <p>${item.price}</p>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}