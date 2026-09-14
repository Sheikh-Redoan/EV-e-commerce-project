import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B1220] border-t border-[#1C2A40] flex justify-center !px-6 md:!px-16 !py-8">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Brand */}
        <div className="text-[#2BE3FF] text-sm font-bold font-['Inter'] tracking-wider uppercase">
          EV SYSTEMS
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 md:gap-16">
          {['Home', 'Product', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-[#8EA0BD] text-xs font-normal font-['Inter'] hover:text-[#2BE3FF] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-[#8EA0BD] text-xs font-normal font-['Inter'] text-center md:text-right">
          © {currentYear} EV Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
