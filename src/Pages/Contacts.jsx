import React, { useState } from 'react';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="container my-5 pt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">CONTACT US</h1>
        <div style={{ width: '50px', height: '3px', backgroundColor: 'black', margin: '10px auto' }}></div>
      </div>
      <div className="row g-5">
        <div className="col-md-6">
          <h4 className="fw-bold mb-4">GET IN TOUCH</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control rounded-0 border-dark" 
                placeholder="Full Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control rounded-0 border-dark" 
                placeholder="Email Address" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>
            <div className="mb-3">
              <textarea 
                className="form-control rounded-0 border-dark" 
                rows="5" 
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark rounded-0 px-4 py-2">SEND MESSAGE</button>
          </form>
        </div>
        <div className="col-md-6 px-lg-5">
          <div className="mb-4">
            <h5 className="fw-bold">OUR STORE</h5>
            <p className="text-muted small">Main Boulevard, Gulberg III, Lahore, Pakistan.</p>
          </div>  
          <div className="mb-4">
            <h5 className="fw-bold">OPENING HOURS</h5>
            <p className="text-muted small mb-0">Monday - Saturday: 10:00 AM - 09:00 PM</p>
            <p className="text-muted small">Sunday: Closed</p>
          </div>
          <div className="mb-4">
            <h5 className="fw-bold">CONTACT INFO</h5>
            <p className="text-muted small mb-0">Phone: +92 300 1234567</p>
            <p className="text-muted small">Email: support@umarmubarak.com</p>
          </div>
          <div className="mt-4">
             <h5 className="fw-bold mb-3">FOLLOW US</h5>
             <div className="d-flex gap-3">
                <span className="text-dark cursor-pointer">Instagram</span>
                <span className="text-dark cursor-pointer">Facebook</span>
                <span className="text-dark cursor-pointer">Pinterest</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}