import React from "react";
import {
  FaGraduationCap,
  FaShoppingCart,
  FaHeartbeat,
  FaMoneyBillWave,
  FaCar,
  FaCode,
} from "react-icons/fa";

const industries = [
  {
    name: "Education",
    icon: <FaGraduationCap className="w-8 h-8" style={{ color: "#D81246" }} />,
  },
  {
    name: "E-Commerce",
    icon: <FaShoppingCart className="w-8 h-8" style={{ color: "#D81246" }} />,
  },
  {
    name: "Healthcare",
    icon: <FaHeartbeat className="w-8 h-8" style={{ color: "#D81246" }} />,
  },
  {
    name: "Finance",
    icon: <FaMoneyBillWave className="w-8 h-8" style={{ color: "#D81246" }} />,
  },
  {
    name: "Automotive",
    icon: <FaCar className="w-8 h-8" style={{ color: "#D81246" }} />,
  },
  {
    name: "Software",
    icon: <FaCode className="w-8 h-8" style={{ color: "#D81246" }} />,
  },
];

export default function IndustryWeServe() {
  return (
    <section className="py-10 md:py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <small className="uppercase tracking-wider font-semibold text-[#D81246]">
            Industry We Serve
          </small>
          <h2 className="text-3xl md:text-4xl font-bold my-4">
            Our industry expertise and solutions
          </h2>
          <p className="text-gray-600">
            At LIMELIGHT, we specialize in delivering innovative IT solutions
            tailored for a diverse range of industries. Our expertise extends
            across:
          </p>
        </div>

        <div className="flex justify-between flex-wrap md:flex-nowrap gap-4">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[120px] max-w-[160px] bg-white p-6 text-center rounded-xl shadow hover:shadow-md transition"
            >
              <div className="w-16 h-16 mx-auto mb-4 border rounded-full flex items-center justify-center">
                {industry.icon}
              </div>
              <h4 className="text-sm font-medium text-gray-800">
                {industry.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
