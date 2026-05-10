import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    navigate('/');
  };
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-box shadow-lg p-5">
        <div className="text-center mb-4">
          <h1 className="fw-bolder mb-1" style={{ fontFamily: "'Bodoni Moda', serif", letterSpacing: '5px' }}>H & H</h1>
          <p className="text-muted small letter-spacing-2">SIGN IN TO YOUR ACCOUNT</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input 
              type="email" 
              className="form-control rounded-0 border-dark py-2" 
              placeholder="EMAIL ADDRESS" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              className="form-control rounded-0 border-dark py-2" 
              placeholder="PASSWORD" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-dark w-100 rounded-0 py-2 fw-bold">LOGIN</button>
        </form>

        <div className="text-center mt-4">
          <p className="small text-muted">Don't have an account? <Link to="/" className="text-dark fw-bold text-decoration-none">SIGN UP</Link></p>
          <Link to="/" className="small text-muted text-decoration-none border-bottom">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}