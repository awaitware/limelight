import React from "react";
import { Link } from "react-router-dom";

import {
  SiWordpress, SiShopify, SiMagento, SiWoocommerce, SiAmazon, SiBigcommerce, SiSquarespace, SiDrupal, SiJoomla,
  SiPaypal, SiStripe, SiRazorpay, SiPhonepe, SiPaytm, SiGooglepay, SiApplepay, SiAmazonpay,
  SiSap, SiOracle, SiZoho,
  SiFacebook, SiInstagram, SiLinkedin, SiPinterest, SiTiktok, SiYoutube,
  SiOpenai, SiGithub, SiSlack, SiZoom, SiNodedotjs,
  SiGoogleanalytics, SiGoogledrive, SiGmail,
  SiFedex, SiDhl, SiJfrog
} from "react-icons/si";

// Icon list with color mapping
const iconList = [
  { icon: SiWordpress, color: "#21759B" },
  { icon: SiShopify, color: "#96BF48" },
  { icon: SiMagento, color: "#EE672F" },
  { icon: SiWoocommerce, color: "#96588A" },
  { icon: SiAmazon, color: "#FF9900" },
  { icon: SiBigcommerce, color: "#1E2B3A" },
  { icon: SiSquarespace, color: "#000000" },
  { icon: SiDrupal, color: "#0678BE" },
  { icon: SiJoomla, color: "#142849" },

  { icon: SiPaypal, color: "#003087" },
  { icon: SiStripe, color: "#635BFF" },
  { icon: SiRazorpay, color: "#0C8FFD" },
  { icon: SiPhonepe, color: "#5F259F" },
  { icon: SiPaytm, color: "#00B9F1" },
  { icon: SiGooglepay, color: "#4285F4" },
  { icon: SiApplepay, color: "#000000" },
  { icon: SiAmazonpay, color: "#FF9900" },

  { icon: SiSap, color: "#008FD3" },
  { icon: SiOracle, color: "#F80000" },
  { icon: SiZoho, color: "#D93F00" },

  { icon: SiFacebook, color: "#1877F2" },
  { icon: SiInstagram, color: "#E4405F" },
  { icon: SiLinkedin, color: "#0A66C2" },
  { icon: SiPinterest, color: "#BD081C" },
  { icon: SiTiktok, color: "#010101" },
  { icon: SiYoutube, color: "#FF0000" },

  { icon: SiOpenai, color: "#412991" },
  { icon: SiGithub, color: "#000000" },
  { icon: SiSlack, color: "#4A154B" },
  { icon: SiZoom, color: "#2D8CFF" },
  { icon: SiNodedotjs, color: "#339933" },

  { icon: SiGoogleanalytics, color: "#F9AB00" },
  { icon: SiGoogledrive, color: "#0F9D58" },
  { icon: SiGmail, color: "#EA4335" },

  { icon: SiFedex, color: "#4D148C" },
  { icon: SiDhl, color: "#BA0C2F" },
  { icon: SiJfrog, color: "#41B883" }
];

export default function IntegrationSection() {
  return (
    <section className="py-14 bg-rose-700">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="mb-10">
          <small className="inline-block border border-white text-white uppercase px-4 py-1 rounded-full font-semibold text-xs tracking-wide">
            Integration
          </small>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            An app for all of your business
          </h2>
          <p className="mt-2 text-white max-w-3xl mx-auto">
            integrates with <span className="text-white font-semibold">over 40 great apps</span> to streamline work
            for business owners, keep teams and clients connected, and better understand your business.
          </p>
        </div>

        {/* Marquee Scroll */}
        <div className="overflow-hidden w-full relative">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {iconList.concat(iconList).map(({ icon: Icon, color }, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl shadow w-16 h-16 flex items-center justify-center shrink-0"
              >
                <Icon size={28} style={{ color }} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-900 transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
