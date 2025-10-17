import { Link } from 'react-router-dom'
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-10 pb-6 font-poppins border-t border-gray-200">

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918070703008"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
      

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <Link to="/" className="flex items-center space-x-3 mb-3">
            <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto" />
            <div className="leading-tight">
              <span className="block text-lg font-bold text-gray-900">LIMELIGHT</span>
              <span className="text-xs text-gray-500 tracking-wide">
                MEDIA | DIGITAL MARKETING | PR
              </span>
            </div>
          </Link>
          <p className="text-sm">
            We specialize in creative digital strategies, PR, and full-spectrum marketing solutions to help your brand shine.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-4 text-gray-900">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#D71245]">Home</Link></li>
            <li><Link to="/testimonials" className="hover:text-[#D71245]">Testimonials</Link></li>
            <li><Link to="/team" className="hover:text-[#D71245]">Team</Link></li>
            <li><Link to="/blog" className="hover:text-[#D71245]">Blog</Link></li>
            <li><Link to="/about" className="hover:text-[#D71245]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#D71245]">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-md font-semibold mb-4 text-gray-900">Top Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog/social-media-marketing" className="hover:text-[#D71245]">Social Media Marketing</Link></li>
            <li><Link to="/blog/election-management" className="hover:text-[#D71245]">Election Management</Link></li>
            <li><Link to="/blog/web-design-development" className="hover:text-[#D71245]">Web Development</Link></li>
            <li><Link to="/blog/search-engine-optimization" className="hover:text-[#D71245]">SEO Optimization</Link></li>
            <li><Link to="/blog/influencer-marketing" className="hover:text-[#D71245]">Influencer Marketing</Link></li>
            <li><Link to="/blog/audio-visuals-production" className="hover:text-[#D71245]">Audio Visuals Production</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold mb-4 text-gray-900">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#D71245] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Head Office - Ahilyanagar</p>
                <p className="break-words">
                  202, Sai Sharan Apartment, Bhide Chowk, Savedi, Ahilyanagar - 414003
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#D71245] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Branch - Pune</p>
                <p className="break-words">Freelancer Team</p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#D71245]" /> <span className="break-all">+91 8070 703 008</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#D71245]" /> <span className="break-all">limelightprsolutions@gmail.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 mt-5">
            <a href="#" className="p-2 bg-[#D71245] text-white rounded-full hover:opacity-90"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-[#D71245] text-white rounded-full hover:opacity-90"><FaTwitter /></a>
            <a href="#" className="p-2 bg-[#D71245] text-white rounded-full hover:opacity-90"><FaInstagram /></a>
            <a href="#" className="p-2 bg-[#D71245] text-white rounded-full hover:opacity-90"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-center gap-4">
        <span>© {new Date().getFullYear()} LIMELIGHT. All rights reserved.</span>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/privacy-policy" className="hover:text-[#D71245]">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-[#D71245]">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
