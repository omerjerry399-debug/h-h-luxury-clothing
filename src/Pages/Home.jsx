import React from 'react'
import { Link } from 'react-router-dom'
import products from '../Components/Product'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
export default function Home() {
  return (
    <div>
   <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="overlay-dark"></div> 
      <img 
        className="d-block w-100" 
        src="/images/hero1.png"
        alt="First slide" 
        style={{ height: '85vh', objectFit: 'cover' }}
      />
    </div>
    <div className="carousel-item">
      <div className="overlay-dark"></div>
      <img 
        className="d-block w-100" 
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070" 
        alt="Second slide"
        style={{ height: '85vh', objectFit: 'cover' }}
      />
      <div className="carousel-caption d-none d-md-block text-center pb-5 mb-5">
        <h1 className="display-2 fw-bold">SEASONAL ESSENTIALS</h1>
        <p className="lead">Up to 50% Off on Selected Items</p>
        <Link to="/sales" className="btn btn-danger rounded-0 px-4 py-2 mt-2">VIEW OFFERS</Link>
      </div>
    </div>
    <div className="carousel-item">
      <div className="overlay-dark"></div>
      <img 
        className="d-block w-100" 
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" 
        alt="Third slide"
        style={{ height: '85vh', objectFit: 'cover' }}
      />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="hero-msg d-flex  flex-column align-items-center justify-content-center mt-3">
<p className='small m-0 p-0 fs-5'>BROWSE BY CATEGORY</p>
<h1 className='msg mt-2 '>SHOP BY CATEGORY</h1>
</div>
<div className="hero-section container  ">
    <div className="row">
   <div className="col-md-3">
    <Link to="/shop/men" className='text-decoration-none'>
  <div className="category-card">
     <div className='images'><img src="/images/suit.jpg" className="img-fluid" /></div>
    <div className="overlay">
      <h4>MEN</h4>
      <p>SHOP NOW</p>
    </div>
  </div></Link>
</div>
<div className="col-md-3">
  <Link to="/shop/women" className='text-decoration-none'>
  <div className="category-card">
     <div className='images'><img src="/images/women.jpg" className="img-fluid" /></div>
    <div className="overlay">
      <h4>WOMEN</h4>
      <p>SHOP NOW</p>
    </div>
  </div></Link>
</div>
<div className="col-md-3">
   <Link to="/shop/kids" className='text-decoration-none'>
  <div className="category-card">
     <div className='images'><img src="/images/child.jpg" className="img-fluid" /></div>
    <div className="overlay">
      <h4>KIDS</h4>
      <p>SHOP NOW</p>
    </div>
  </div></Link>
</div>
<div className="col-md-3">
  <Link to="/sales" className='text-decoration-none'>
  <div className="category-card">
    <div className='images'><img src="/images/sale.jpg" className="img-fluid" /></div>
    <div className="overlay">
      <h4>SALE</h4>
      <p>SHOP NOW</p>
    </div>
  </div></Link>
</div>
</div>
</div>
<div className="hero-msg d-flex container  flex-column align-items-center justify-content-center mt-4">
<p className='small m-0 p-0 fs-5'>TRENDING NOW</p>
<h1 className='msg mt-2 '>BEST SELLER</h1>
<div className="row mt-5">
  {products.map((item) => {
    return(
    <div className="col-md-6 mt-4" key={item.id}>
      <div className="card">
        <img src={item.image} className="card-img-top" />       
            <MdOutlineCheckBoxOutlineBlank className='btn1' style={{ fontSize: 15 ,  backgroundColor: "white" }}/>
        <div className="card-body text-center">
          <h3>{item.name}</h3>
          {
            item.isSale ? (
              <p>
                <span className="text-danger fw-bold fs-4">${item.salePrice}</span>{" "}
                <del className=' fs-5'>${item.price}</del>
              </p>
            ) : (
              <p className='fs-4'>${item.price}</p>
            )
          }

        </div>

      </div>
    </div>
    )
})}
</div>
</div>

    </div>
  )
}
