import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <nav className="navbar">
      {/* Logo section */}
        <div className="logo">
          <img src="/logo.PNG" alt="Logo" className="logo-img" />
        </div>

        {/* Navigation links */}
           <ul className="nav-links">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/projects">Projects</Link></li>
           <li><Link to="/education">Education</Link></li>
           <li><Link to="/services">Services</Link></li>
           <li><Link to="/contact">Contact</Link></li>
       </ul>
    </nav>
);
}