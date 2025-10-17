import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBullhorn,
  FaCode,
  FaSearch,
  FaUsers,
  FaBriefcase,
  FaUserTie,
  FaMoneyBillWave,
  FaAd,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const services = [
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn size={36} />,
    link: "/blog/social-media-marketing",
  },
  {
    title: "Web Design & Development",
    icon: <FaCode size={36} />,
    link: "/blog/web-design-development",
  },
  {
    title: "Search Engine Optimization",
    icon: <FaSearch size={36} />,
    link: "/blog/search-engine-optimization",
  },
  {
    title: "Public Relations (PR)",
    icon: <FaUsers size={36} />,
    link: "/blog/public-relations",
  },
  {
    title: "Media Consulting",
    icon: <FaBriefcase size={36} />,
    link: "/blog/media-consulting",
  },
  {
    title: "Influencer Marketing",
    icon: <FaUserTie size={36} />,
    link: "/blog/influencer-marketing",
  },
  {
    title: "Paid Marketing Campaign",
    icon: <FaMoneyBillWave size={36} />,
    link: "/blog/paid-marketing-campaign",
  },
  {
    title: "Advertising & Branding",
    icon: <FaAd size={36} />,
    link: "/blog/advertising-branding",
  },
  {
    title: "eCommerce Marketing",
    icon: <FaShoppingCart size={36} />,
    link: "/blog/ecommerce-marketing",
  },
];

export default function PopularServices() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -280 : 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-4 md:px-6 py-10 font-poppins">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8">
          Popular services
        </h2>

        <div className="relative flex items-center">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-3 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            <FaChevronLeft className="text-[#BB0F31]" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full px-1 py-2"
          >
            {services.map((service, i) => (
              <div key={i} className="flex-shrink-0 px-1 md:px-0">
                <div className="w-[180px] md:w-48 h-[250px] md:h-[270px] rounded-xl text-white border border-[#f75b82] flex flex-col justify-between shadow-sm transform transition-transform duration-300 hover:scale-105 overflow-hidden bg-gradient-to-br from-[#BB0F31] to-[#ff5694]">
                  {/* Title */}
                  <div className="p-3 text-sm font-semibold leading-snug">
                    {service.title}
                  </div>

                  {/* Icon */}
                  <div className="flex-1 flex items-center justify-center px-2 py-2">
                    <div className="w-full h-[130px] rounded-lg flex items-center justify-center">
                      <div className="text-white">{service.icon}</div>
                    </div>
                  </div>

                  {/* Link Button */}
                  <div className="px-3 pb-3 pt-2">
                    <Link
                      to={service.link}
                      className="w-full inline-block text-center py-1.5 text-xs font-semibold rounded-full bg-white text-[#BB0F31] hover:opacity-90 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-3 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            <FaChevronRight className="text-[#BB0F31]" />
          </button>
        </div>
      </div>
    </div>
  );
}
