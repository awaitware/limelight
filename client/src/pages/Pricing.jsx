import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicePricingData } from '../data/servicePricingData';
import PopularServices from '../components/PopularServices'; 
export default function AllServices() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChoosePlan = (serviceName, planTitle) => {
    navigate('/contact', { state: { service: serviceName, plan: planTitle } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-poppins mt-10">
      <h1 className="text-4xl font-extrabold text-center text-[#D71245] mb-10">
        Our Services & Plans
      </h1>

      {servicePricingData.map((service, idx) => (
        <div key={idx} className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#D71245] pl-3">
            {service.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 border shadow-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-lg ${
                  plan.highlight
                    ? 'border-[#D71245] bg-[#fff5f6]'
                    : 'border-gray-200'
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {plan.title}
                </h3>
                <p className="text-2xl font-bold text-[#D71245] mb-3">
                  {plan.price}{' '}
                  <span className="text-sm font-normal text-gray-600">
                    /Month
                  </span>
                </p>

                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D71245] font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleChoosePlan(service.name, plan.title)}
                  className="w-full bg-[#D71245] text-white rounded py-2 font-semibold hover:bg-[#ba0f31] transition"
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <PopularServices />
    </div>
  );
}
