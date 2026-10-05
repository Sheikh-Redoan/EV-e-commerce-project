import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaTiktok, 
  FaWhatsapp, 
  FaLinkedinIn, 
  FaTelegramPlane, 
  FaYoutube 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [socialLinks, setSocialLinks] = useState(null);

  useEffect(() => {
    fetch('https://admin.evsystems.com.au/api/social-links')
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          setSocialLinks(data.data);
        }
      })
      .catch((error) => console.error("Error fetching social links:", error));
  }, []);

  return (
    <footer className="w-full bg-[#0B1220] border-t border-[#1C2A40] flex justify-center !px-6 md:!px-16 !py-8">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Brand */}
        <div className="text-[#2BE3FF] text-sm font-bold font-['Inter'] tracking-wider uppercase">
          EV SYSTEMS
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks?.facebook_link && (
            <a href={socialLinks.facebook_link} target="_blank" rel="noopener noreferrer" className="text-[#8EA0BD] text-xl hover:text-[#2BE3FF] transition-colors">
              <FaFacebook />
            </a>
          )}
          {socialLinks?.instagram_link && (
            <a href={socialLinks.instagram_link} target="_blank" rel="noopener noreferrer" className="text-[#8EA0BD] text-xl hover:text-[#2BE3FF] transition-colors">
              <FaInstagram />
            </a>
          )}
          {socialLinks?.twitter_link && (
            <a href={socialLinks.twitter_link} target="_blank" rel="noopener noreferrer" className="text-[#8EA0BD] text-xl hover:text-[#2BE3FF] transition-colors">
              <FaTwitter />
            </a>
          )}
          {socialLinks?.tiktok_link && (
            <a href={socialLinks.tiktok_link} target="_blank" rel="noopener noreferrer" className="text-[#8EA0BD] text-xl hover:text-[#2BE3FF] transition-colors">
              <FaTiktok />
            </a>
          )}
          {socialLinks?.whatsapp_link && (
            <a href={socialLinks.whatsapp_link} target="_blank" rel="noopener noreferrer" className="text-[#8EA0BD] text-xl hover:text-[#2BE3FF] transition-colors">
              <FaWhatsapp />
            </a>
          )}
          {socialLinks?.linkedin_link && (
            <a href={socialLinks.linkedin_link} target="_blank" rel="noopener noreferrer" className="text-[#8EA0BD] text-xl hover:text-[#2BE3FF] transition-colors">
              <FaLinkedinIn />
            </a>
          )}
          {socialLinks?.telegram_link && (
            <a href={socialLinks.telegram_link} target="_blank" rel="noopener noreferrer" className="text-[#8EA0BD] text-xl hover:text-[#2BE3FF] transition-colors">
              <FaTelegramPlane />
            </a>
          )}
          {socialLinks?.youtube_link && (
            <a href={socialLinks.youtube_link} target="_blank" rel="noopener noreferrer" className="text-[#8EA0BD] text-xl hover:text-[#2BE3FF] transition-colors">
              <FaYoutube />
            </a>
          )}
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
