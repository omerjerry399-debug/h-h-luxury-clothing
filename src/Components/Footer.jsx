import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-white text-dark pt-5 pb-4 border-top mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
  <div className="mb-3 d-inline-block text-center">
    <h2 className="m-0 p-0 fw-bolder text-dark" style={{ 
      fontFamily: "'Bodoni Moda', serif", 
      fontSize: '2.5rem', 
      letterSpacing: '6px',
      lineHeight: '1'
    }}>
      H & H
    </h2>
    <p className="text-muted m-0 p-0" style={{ 
      fontFamily: "'Cinzel', serif", 
      fontSize: '10px', 
      letterSpacing: '4px',
      marginTop: '5px', 
      display: 'block' 
    }}>
      HIM & HER
    </p>
  </div>
  <p className="small text-muted mt-2" style={{ lineHeight: '1.8' }}>
    "Wear the Trend. Define Your Style." <br />
    High-quality formal and casual wear designed for the modern man.
  </p>
</div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="fw-bold mb-4">SHOP</h6>
            <p><Link to="/men" className="text-muted text-decoration-none small">Men's Collection</Link></p>
            <p><Link to="/women" className="text-muted text-decoration-none small">Women's Collection</Link></p>
            <p><Link to="/kids" className="text-muted text-decoration-none small">Kids Edition</Link></p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="fw-bold mb-4">SUPPORT</h6>
            <p><Link to="/about" className="text-muted text-decoration-none small">Brand Story</Link></p>
           <p><Link to="/contacts" className="text-muted text-decoration-none small">Contact Us</Link></p>
            <p><Link to="/shipping" className="text-muted text-decoration-none small">Shipping & Returns</Link></p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="fw-bold mb-4">FOLLOW US</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-dark"><FaFacebookF /></a>
              <a href="#" className="text-dark"><FaInstagram /></a>
              <a href="#" className="text-dark"><FaTwitter /></a>
              <a href="#" className="text-dark"><FaPinterestP /></a>
            </div>
            <div className="mt-4">
              <p className="small fw-bold mb-2">JOIN OUR NEWSLETTER</p>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-sm rounded-0 border-dark" placeholder="Email Address" />
                <button className="btn btn-dark btn-sm rounded-0" type="button">OK</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-4 mt-5" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <p className="small text-muted">
              © 2026 <strong>Umar Mubarak</strong>. All Rights Reserved. Designed for Professional Excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}