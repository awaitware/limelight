import React from "react";
import { Link } from "react-router-dom";
export default function FreeSEOConsultation() {
  return (
    <div className="py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-primary rounded-3xl p-6 md:p-12 gap-8">
          {/* Left Section */}
          <div className="md:w-7/12 xl:w-5/12">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Schedule a Free SEO Consultation
            </h2>
            <p className="text-white opacity-90">
              Unlock your website’s potential with a free SEO consultation from <strong>LIMELIGHT</strong>.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-5/12 xl:w-5/12 text-center md:text-left">
            <p className="text-white opacity-90 mb-4">
              Our experts will provide personalized strategies to boost your search rankings and drive traffic. Schedule now!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition"
            >
              Book my free consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
