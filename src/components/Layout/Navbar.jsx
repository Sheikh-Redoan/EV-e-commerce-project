import React from 'react';
import { Link } from 'react-router-dom';
import logo from "/logo.png";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 px-6 md:px-10 h-24 flex justify-between items-center max-w-[1440px] mx-auto right-0">
      {/* Logo Placeholder */}
      <Link to="/" className="w-24 h-16 flex items-center">
        <img 
          src={logo} 
          alt="Brand Logo" 
          className="object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 md:pr-10">
        {['Home', 'Product', 'Contact'].map((item) => (
          <Link
            key={item}
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className="text-[#8EA0BD] text-xs font-normal font-['Inter'] hover:text-[#2BE3FF] transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
