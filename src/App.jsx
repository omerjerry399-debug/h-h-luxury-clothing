import React from 'react'
import { Routes , Route, useLocation} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/footer'
import Shop from './Pages/Shop'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Contacts from './Pages/Contacts'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Sales from './Pages/Sales'
import ProductDetails from './Pages/ProductDetails'
import './assets/bootstrap.min.css'
import Shipping from './Pages/Shipping'
export default function App() {
  const location = useLocation(); 
  const isLoginPage = location.pathname === '/login';
  return (
    <div>
      {!isLoginPage && <Navbar />} 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:category' element={<Shop />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<div className="container mt-5 pt-5 text-center"><h1>404 - Page Not Found</h1></div>} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  )
}
