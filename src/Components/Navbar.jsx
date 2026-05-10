import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from "react-icons/fi"; 
import { LuLogIn } from "react-icons/lu";
import { FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="position-relative">
      <div className={`search-overlay ${isSearchOpen ? 'open' : ''}`} style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: isSearchOpen ? '100vh' : '0',
        backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 3000, overflow: 'hidden', transition: '0.5s'
      }}>
        <div className="container h-100 d-flex flex-column justify-content-center px-4">
          <div className="d-flex justify-content-end mb-4">
            <FiX className="text-white fs-1" onClick={() => setIsSearchOpen(false)} style={{ cursor: 'pointer' }} />
          </div>
          <div className="position-relative border-bottom border-white pb-2">
            <input 
              type="text" 
              className="bg-transparent border-0 text-white w-100 fs-2 shadow-none" 
              placeholder="SEARCH OUR COLLECTION..." 
              style={{ outline: 'none', letterSpacing: '2px' }}
              autoFocus={isSearchOpen}
            />
            <FiSearch className="position-absolute end-0 top-50 translate-middle-y text-white fs-3" />
          </div>
        </div>
      </div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} style={{
        position: 'fixed', top: 0, right: isCartOpen ? '0' : '-100%',
        width: '350px', height: '100vh', backgroundColor: '#fff',
        zIndex: 3000, transition: '0.4s ease', padding: '30px'
      }}>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
          <h4 className="fw-bold m-0 text-black">YOUR BAG (0)</h4>
          <FiX className="fs-3 text-black" onClick={() => setIsCartOpen(false)} style={{ cursor: 'pointer' }} />
        </div>
        <div className="h-75 d-flex flex-column align-items-center justify-content-center text-center">
          <FaShoppingBag size={50} className="text-muted mb-3" />
          <p className="text-muted">Your cart is currently empty.</p>
        </div>
        <button className="btn btn-dark w-100 rounded-0 py-3 fw-bold mt-auto">CHECKOUT</button>
      </div>
      <div style={{
        position: 'fixed', top: 0, left: isMenuOpen ? '0' : '-100%',
        width: '280px', height: '100vh', backgroundColor: '#000',
        zIndex: 2000, transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)', padding: '30px'
      }}>
        <div className="d-flex justify-content-end mb-5">
          <FiX className="text-white fs-2" onClick={() => setIsMenuOpen(false)} style={{ cursor: 'pointer' }} />
        </div>
        <ul className="list-unstyled">
          {['Home', 'Shop', 'About', 'Contacts'].map((item) => (
            <li key={item} className="mb-4">
              <Link className="text-white text-decoration-none fs-5 text-uppercase" to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      {(isMenuOpen || isCartOpen || isSearchOpen) && (
        <div 
          onClick={() => { setIsMenuOpen(false); setIsCartOpen(false); setIsSearchOpen(false); }}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1500, backdropFilter: 'blur(4px)' }}
        />
      )}
      <nav className="navbar navbar-dark bg-black px-3 py-3 shadow-sm position-relative">
        <div className="container-fluid">
          <div className="d-lg-none">
            <FiMenu className="text-white fs-2" style={{ cursor: 'pointer' }} onClick={() => setIsMenuOpen(true)} />
          </div>
          <ul className="navbar-nav d-none d-lg-flex flex-row gap-4">
            <li className="nav-item"><Link className="nav-link text-uppercase p-0" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase p-0" to="/shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase p-0" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase p-0" to="/contacts">Contact</Link></li>
          </ul>
          <div className="text-center position-absolute start-50 translate-middle-x">
            <Link to="/" className="text-decoration-none text-white">
              <h1 className="m-0 p-0 fw-bolder" style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '2.5rem', letterSpacing: '4px' }}>H & H</h1>
              <p className="m-0 p-0" style={{ fontSize: '10px', letterSpacing: '2px' }}>HIM & HER</p>
            </Link>
          </div>
          <div className="d-flex align-items-center gap-4">
            <FiSearch className="text-white fs-4" style={{ cursor: 'pointer' }} onClick={() => setIsSearchOpen(true)} />
            <Link to="/login" className="text-white"><LuLogIn className="fs-4" /></Link>
            <div className="position-relative" style={{ cursor: 'pointer' }} onClick={() => setIsCartOpen(true)}>
              <FaShoppingBag className="text-white fs-4" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '8px' }}>0</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}