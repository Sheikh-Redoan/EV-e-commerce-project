import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../config/routes';
import fallbackLogo from '/logo.png';

export default function Navbar() {
  const { data: landingPageData } = useSelector((state) => state.landingPage);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const logoUrl = landingPageData?.banners?.[0]?.banner_logo || fallbackLogo;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <nav 
      className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out border-b border-[#1C2A40]/50 ${
        isScrolled 
          ? 'bg-[#05070C]/95 backdrop-blur-md shadow-lg py-0' 
          : 'bg-[#05070C] py-2'
      }`}
    >
      <div className="max-w-[1440px] !mx-auto !px-6 md:!px-10 h-24 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="w-24 h-16 flex items-center">
          <img src={logoUrl} alt="EV Systems Logo" className="object-contain w-full h-full" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link
              to={ROUTES.HOME}
              className="text-[#8EA0BD] text-xs font-normal font-['Inter'] hover:text-[#2BE3FF] transition-colors"
            >
              Home
            </Link>
            <Link
              to={ROUTES.PRODUCTS}
              className="text-[#8EA0BD] text-xs font-normal font-['Inter'] hover:text-[#2BE3FF] transition-colors"
            >
              Product
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className="text-[#8EA0BD] text-xs font-normal font-['Inter'] hover:text-[#2BE3FF] transition-colors"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
