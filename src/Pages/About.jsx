import React from 'react';
export default function About() {
  return (
    <div className="container my-5 pt-5">
      <div className="row align-items-center mb-5 pb-5">
    <div className="col-md-6 order-2 order-md-1">
  <div className="mb-4 d-inline-block text-center"> 
    <h2 className="m-0 p-0 fw-bolder text-dark" style={{ 
      fontFamily: "'Bodoni Moda', serif", 
      fontSize: '4rem', 
      letterSpacing: '10px',
      lineHeight: '1'
    }}>
      H & H
    </h2>
    <p className="text-muted m-0 p-0" style={{ 
      fontFamily: "'Cinzel', serif", 
      fontSize: '15px', 
      letterSpacing: '5px',
      marginTop: '10px', 
      display: 'block'
    }}>
      HIM & HER
    </p>
  </div>
  <h6 className="text-muted text-uppercase letter-spacing-2 mb-2 mt-3" style={{ fontSize: '0.8rem' }}>
    The Heritage
  </h6>
  <p className="lead text-muted" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
    Established in 2026, our brand is a beautiful fusion of modern tailoring and traditional elegance. 
    We don’t just create apparel; we redefine your personality with a touch of sophistication.
  </p>
  <div className="mt-4" style={{ width: '50px', height: '2px', background: '#000' }}></div>
</div>
        <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
          <img 
            src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=1000" 
            alt="Tailoring Brand" 
            className="img-fluid shadow-lg"
            style={{ filter: 'grayscale(100%)' }} 
          />
        </div>
      </div>
     <div className="row g-4 mb-5 text-center">
  <div className="col-md-4">
    <div className="about-card shadow-sm"> 
      <h5 className="fw-bold">OUR MISSION</h5>
      <p className="small text-muted">Our primary mission is to empower every man with unparalleled confidence and premium comfort.</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="about-card shadow-sm">
      <h5 className="fw-bold">SUSTAINABILITY</h5>
      <p className="small text-muted">We utilize 100% organic cotton to ensure a sustainable and protected environment.</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="about-card shadow-sm">
      <h5 className="fw-bold">CRAFTSMANSHIP</h5>
      <p className="small text-muted">Every stitch we craft tells a story of our master tailors' expertise and dedication.</p>
    </div>
  </div>
</div>
      <div className="mt-5 pt-5 border-top">
        <h6 className="text-center text-muted mb-4 small letter-spacing-2">FEATURED IN</h6>
        <div className="d-flex justify-content-around align-items-center opacity-50 flex-wrap gap-4">
          <h4 className="fw-bold">VOGUE</h4>
          <h4 className="fw-bold">GQ</h4>
          <h4 className="fw-bold">H&M</h4>
          <h4 className="fw-bold">ZARA</h4>
        </div>
      </div>
    </div>
  );
}