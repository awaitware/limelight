import React from "react";

export default function ProjectIdeaSection() {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between bg-gray-800 rounded-2xl p-6 md:p-10">
          {/* Text Content */}
          <div className="text-center md:text-left mb-6 md:mb-0 md:w-2/3">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Have a Cool Project Idea?
            </h2>
            <p className="text-gray-400">
              Planning to build a new website or web app for your startup?
            </p>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center md:w-1/3">
            <a
              href="https://wa.me/918070703008?text=Hi%2C%20I'm%20interested%20in%20discussing%20a%20project%20idea!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Say Hi on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
