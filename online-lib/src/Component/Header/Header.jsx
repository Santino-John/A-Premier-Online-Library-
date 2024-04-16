import React, { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    const [toggle,settoggle]=useState(false);
  return (
    <div className="header">
      <div className="top-header">
        <div className="nav-icon" onClick={()=>{settoggle(!toggle)}}> <i class="bi bi-list"></i></div>
        <div className="top-header-phone">
          <i className="bi bi-telephone-fill"></i>
          (+256) 778573534
        </div>
        <div className="top-header-title">Welcome To EAC Book Store </div>
        <div className="top-header-login">
          <Link to="/login"> 
          <i class="bi bi-person-fill"></i>
         <b> Login</b> 
          </Link>
        </div>
      </div>

      <div className="middle-header">
        <div className="middle-header-logo">
          <Link to="/"><b>Book</b>
          <i class="bi bi-book"></i>
          <b>Store</b> </Link>
          
        </div>
        <div className="middle-header-search">
          <input
            type="search"
            placeholder="Search in book store ... "
            className="input-search"
          />
          <i class="bi bi-search"></i>
        </div>
        <div className="middle-header-icon" >
          <Link to="/cart">  <i class="bi bi-cart3" style={{color:"white"}}></i> </Link>
        </div>
      </div>

      <div className="header-navbar" style={{left: toggle&& "0"}}>

        <ul className="navbar-links">
          <Link to="/" className="navbar-link"> Home</Link>
          <Link to="/authors" className="navbar-link">Authors</Link>
          <Link to="/aboutUs" className="navbar-link">About Us</Link>
          <Link to="/contactUs" className="navbar-link">Contact Us </Link>
          <Link to="/register" className="navbar-link">Register </Link>
        </ul>

      </div>
    </div>
  );
};

export default Header;
