import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Pricing from '../pages/Pricing'

const testimonials = [
  {
    name: '',
    brandLogo: '/assets/Brand Logo/bafna.png',
    rating: 5,
    review: 'Very professional team. Perfect for social media marketing!',
  },
  {
    name: '',
    brandLogo: '/assets/Brand Logo/shreeram.png',
    rating: 4,
    review: 'डिझाईन आणि व्हिडीओ एडिटिंग अत्यंत प्रभावी आणि आकर्षक होते.',
  },
  {
    name: '',
    brandLogo: '/assets/Brand Logo/dole.png',
    rating: 5,
    review: 'Our brand got great visibility thanks to their support.',
  },
  {
    name: '',
    brandLogo: '/assets/Brand Logo/ganeshcollection.png',
    rating: 5,
    review: 'त्यांचं काम अत्यंत दर्जेदार आणि वेळेवर आहे.',
  },
  {
    name: '',
    brandLogo: '/assets/Brand Logo/samany.png',
    rating: 4,
    review: 'Creative ideas and timely delivery. Highly recommend!',
  },
  {
    name: '',
    brandLogo: '/assets/Brand Logo/tusharkadam.png',
    rating: 5,
    review: 'सोशल मीडियासाठी उत्कृष्ट सेवा दिली. धन्यवाद!',
  },
];

export default function Testimonials() {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-poppins mt-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-[#D81246] mb-2">Your Feedback Matters</h2>
        <p className="text-gray-600 text-sm">Our trust is built through real customer experiences.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition transform hover:scale-105 duration-300"
          >
            {/* Brand logo */}
            <img src={t.brandLogo} alt="Brand Logo" className="h-10 mb-2" />

            {/* Stars */}
            <div className="flex justify-center gap-1 text-[#D81246] mb-2">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-700 text-sm mb-4">{t.review}</p>

            {/* Reviewer name */}
            <h4 className="text-[#D81246] font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
      <Pricing />
    </div>
    
  );
}
