import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import {
  FaBullhorn, FaPoll, FaCode, FaSearch, FaShieldAlt, FaVideo,
  FaUsers, FaPenNib, FaBriefcase, FaUserTie, FaMoneyBillWave,
  FaEnvelopeOpenText, FaAd, FaShoppingCart, FaRupeeSign  
} from 'react-icons/fa';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);
  const toggleDesktopServices = () => setDesktopServicesOpen(!desktopServicesOpen);

  const handleLinkClick = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesList = [
    { name: 'Public Relations (PR)', icon: <FaUsers />, desc: 'Build trust through public relations', link: '/blog/public-relations' },
    { name: 'Media Consulting', icon: <FaBriefcase />, desc: 'Strategic media planning', link: '/blog/media-consulting' },
    { name: 'Election Management', icon: <FaPoll />, desc: 'Organize & manage political campaigns', link: '/blog/election-management' },
    { name: 'Social Media Marketing', icon: <FaBullhorn />, desc: 'Boost your brand on social platforms', link: '/blog/social-media-marketing' },
    { name: 'Paid Marketing Campaign', icon: <FaMoneyBillWave />, desc: 'Run effective ad campaigns', link: '/blog/paid-marketing-campaign' },
    { name: 'Influencer Marketing', icon: <FaUserTie />, desc: 'Leverage influencer reach', link: '/blog/influencer-marketing' },
    { name: 'Advertising & Branding', icon: <FaAd />, desc: 'Create impactful brand identities', link: '/blog/advertising-branding' },
    { name: 'eCommerce Marketing', icon: <FaShoppingCart />, desc: 'Drive more online sales', link: '/blog/ecommerce-marketing' },
    { name: 'Search Engine Optimization', icon: <FaSearch />, desc: 'Improve search visibility', link: '/blog/search-engine-optimization' },
    { name: 'Web Design & Development', icon: <FaCode />, desc: 'Build modern, responsive websites', link: '/blog/web-design-development' },
    { name: 'Audio Visuals Production', icon: <FaVideo />, desc: 'Engage audiences with AV content', link: '/blog/audio-visuals-production' },
    { name: 'Strategy & Content Marketing', icon: <FaPenNib />, desc: 'Deliver value-driven content', link: '/blog/strategy-content-marketing' },
    { name: 'Bulk Messaging Solutions', icon: <FaEnvelopeOpenText />, desc: 'Reach users instantly', link: '/blog/bulk-messaging-solutions' },
    { name: 'Online Reputation Management (ORM)', icon: <FaShieldAlt />, desc: 'Protect your brand online', link: '/blog/online-reputation-management' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 font-poppins fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-12 items-center">
        {/* Logo */}
        <div className="col-span-6 lg:col-span-3">
          <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-3">
            <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto" />
            <div className="leading-tight">
              <span className="block text-lg font-bold text-gray-900">LIMELIGHT</span>
              <span className="hidden lg:block text-xs text-gray-500 tracking-wide">
                MEDIA | DIGITAL MARKETING | PR
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex col-span-6 justify-center items-center space-x-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-[#D71245]" onClick={handleLinkClick}>Home</Link>
          <div className="relative" ref={dropdownRef}>
            <span
              onClick={toggleDesktopServices}
              className="hover:text-[#D71245] flex items-center space-x-1 cursor-pointer"
            >
              <span>Services</span>
              <FiChevronDown className={`transition-transform duration-300 ${desktopServicesOpen ? 'rotate-180' : ''}`} />
            </span>
            {desktopServicesOpen && (
              <div className="absolute left-0 top-full mt-6 bg-white shadow-xl rounded-xl w-[720px] z-50 p-6">
                <div className="grid grid-cols-2 gap-5 text-sm text-gray-700 overflow-y-auto max-h-[60vh] pr-2 scrollbar-hide">
                  {servicesList.map((item, index) => (
                    <Link
                      to={item.link}
                      onClick={handleLinkClick}
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-[#D81247] group"
                    >
                      <span className="text-2xl text-[#D71245] group-hover:text-white">{item.icon}</span>
                      <div>
                        <span className="font-semibold text-gray-900 group-hover:text-white">{item.name}</span>
                        <p className="text-gray-500 text-sm group-hover:text-white">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x border-t mt-6 pt-4 text-sm text-gray-700">
                  <Link to="/Pricing" className="flex items-center justify-center gap-2 hover:text-[#D71245]" onClick={handleLinkClick}>
                    <FaRupeeSign   className="w-4 h-4" /> Get Pricing
                  </Link>
                  <Link to="/contact" className="flex items-center justify-center gap-2 hover:text-[#D71245]" onClick={handleLinkClick}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1H2V5zm0 2h16v8a2 2 0 01-2 2H4a2 2 0 01-2-2V7zm4 3h4a1 1 0 000-2H6a1 1 0 000 2z" />
                    </svg> Contact sales
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/Pricing" className="hover:text-[#D71245]" onClick={handleLinkClick}>Pricing</Link>
          <Link to="/testimonials" className="hover:text-[#D71245]" onClick={handleLinkClick}>Testimonials</Link>
          <Link to="/team" className="hover:text-[#D71245]" onClick={handleLinkClick}>Team</Link>
          <Link to="/blog" className="hover:text-[#D71245]" onClick={handleLinkClick}>Blog</Link>
          <Link to="/about" className="hover:text-[#D71245]" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" className="hover:text-[#D71245]" onClick={handleLinkClick}>Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="col-span-6 lg:col-span-3 flex justify-end">
          <button onClick={toggleMobileMenu} className="text-2xl text-gray-700 lg:hidden">
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-4 py-4 space-y-2 shadow-md text-sm font-medium text-gray-700">
          <Link to="/" className="block hover:text-[#D71245]" onClick={handleLinkClick}>Home</Link>
          <div>
            <button onClick={toggleMobileServices} className="flex justify-between items-center w-full hover:text-[#D71245]">
              <span>Services</span>
              <FiChevronDown className={`transform transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-4 space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                {servicesList.map((item, index) => (
                  <Link
                    to={item.link}
                    onClick={handleLinkClick}
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-[#D81247] group"
                  >
                    <span className="text-2xl text-[#D71245] group-hover:text-white">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white">{item.name}</p>
                      <p className="text-gray-500 text-sm group-hover:text-white">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/Pricing" className="block hover:text-[#D71245]" onClick={handleLinkClick}>Pricing</Link>
          <Link to="/testimonials" className="block hover:text-[#D71245]" onClick={handleLinkClick}>Testimonials</Link>
          <Link to="/team" className="block hover:text-[#D71245]" onClick={handleLinkClick}>Team</Link>
          <Link to="/blog" className="block hover:text-[#D71245]" onClick={handleLinkClick}>Blog</Link>
          <Link to="/about" className="block hover:text-[#D71245]" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" className="block hover:text-[#D71245]" onClick={handleLinkClick}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
