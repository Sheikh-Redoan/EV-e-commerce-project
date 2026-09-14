import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../config/routes';
import logo from '/logo.png';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    setDropdownOpen(false);
    await logout();
    navigate(ROUTES.HOME);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070C]/80 backdrop-blur-md border-b border-[#1C2A40]/50">
      <div className="max-w-[1440px] !mx-auto !px-6 md:!px-10 h-24 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="w-24 h-16 flex items-center">
          <img src={logo} alt="EV Systems Logo" className="object-contain" />
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

          {/* Auth State Controls */}
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 p-1.5 rounded-full hover:bg-[#101A2C] transition-colors outline-none focus:ring-1 focus:ring-[#2BE3FF]"
              >
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user?.name || 'User'}
                    className="w-9 h-9 rounded-full object-cover border border-[#2BE3FF]"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#1C2A40] border border-[#2BE3FF] flex items-center justify-center text-[#2BE3FF] text-xs font-bold font-['Inter']">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                )}
                <span className="hidden sm:inline text-xs font-medium text-[#F5F9FF] font-['Inter'] max-w-[120px] truncate">
                  {user?.name || 'My Account'}
                </span>
                <span className="text-[#8EA0BD] text-xs">▼</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#0A0F19] rounded-xl outline outline-1 outline-[#1C2A40] shadow-2xl py-2 flex flex-col z-50">
                  <div className="!px-4 !py-2 border-b border-[#1C2A40]">
                    <div className="text-xs font-bold text-[#F5F9FF] truncate font-['Inter']">
                      {user?.name}
                    </div>
                    <div className="text-[11px] text-[#8EA0BD] truncate font-['Inter']">
                      {user?.email}
                    </div>
                  </div>

                  <Link
                    to={ROUTES.DASHBOARD}
                    onClick={() => setDropdownOpen(false)}
                    className="!px-4 !py-2.5 text-xs text-[#8EA0BD] hover:text-[#2BE3FF] hover:bg-[#101A2C] transition-colors font-['Inter']"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to={ROUTES.ORDERS}
                    onClick={() => setDropdownOpen(false)}
                    className="!px-4 !py-2.5 text-xs text-[#8EA0BD] hover:text-[#2BE3FF] hover:bg-[#101A2C] transition-colors font-['Inter']"
                  >
                    My Orders
                  </Link>
                  <Link
                    to={ROUTES.PROFILE}
                    onClick={() => setDropdownOpen(false)}
                    className="!px-4 !py-2.5 text-xs text-[#8EA0BD] hover:text-[#2BE3FF] hover:bg-[#101A2C] transition-colors font-['Inter']"
                  >
                    Profile Settings
                  </Link>

                  <div className="border-t border-[#1C2A40] my-1" />

                  <button
                    onClick={handleLogout}
                    className="text-left w-full !px-4 !py-2.5 text-xs text-red-400 hover:bg-[#101A2C] transition-colors font-['Inter']"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to={ROUTES.LOGIN}
                className="!px-4 !py-2 text-xs font-semibold text-[#F5F9FF] hover:text-[#2BE3FF] transition-colors font-['Inter']"
              >
                Sign In
              </Link>
              <Link
                to={ROUTES.REGISTER}
                className="!px-4 !py-2 rounded-full border border-[#2BE3FF] text-[#2BE3FF] text-xs font-semibold font-['Inter'] hover:bg-[#2BE3FF]/10 transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
