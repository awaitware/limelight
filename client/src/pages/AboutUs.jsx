import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import Team from '../pages/Team'
import Contact from '../pages/Contact';
import Pricing from '../pages/Pricing'

import {
  FaAward,
  FaProjectDiagram,
  FaUserTie,
} from 'react-icons/fa';

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* ---------- ABOUT SECTION ---------- */}
      <section className="relative w-full text-white overflow-hidden min-h-[400px]">
        {/* Diagonal Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(70deg, #BA0F31 50%, #D81246 50%)`,
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 font-poppins text-white mt-10">
          {/* ---------- HEADER ---------- */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-white mb-4">About LIMELIGHT</h1>
            <p className="text-lg text-gray-200">
              Your partner in transforming brands and building online impact.
            </p>
          </div>

          {/* ACHIEVEMENTS FIRST */}
          <section className="bg-white text-gray-800 py-10 px-6 rounded-xl mb-20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* Awards */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md transform transition hover:scale-105">
                <FaAward className="text-4xl text-[#D81246] mb-3 mx-auto" />
                <h3 className="text-3xl font-bold text-[#D81246]">
                  <CountUp end={10} duration={2} />+
                </h3>
                <p className="text-gray-600 mt-1">Awards Won</p>
              </div>

              {/* Projects */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md transform transition hover:scale-105">
                <FaProjectDiagram className="text-4xl text-[#D81246] mb-3 mx-auto" />
                <h3 className="text-3xl font-bold text-[#D81246]">
                  <CountUp end={100} duration={2.5} />+
                </h3>
                <p className="text-gray-600 mt-1">Client Projects Delivered</p>
              </div>

              {/* Experience */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md transform transition hover:scale-105">
                <FaUserTie className="text-4xl text-[#D81246] mb-3 mx-auto" />
                <h3 className="text-3xl font-bold text-[#D81246]">
                  <CountUp end={6} duration={1.5} />+ Years
                </h3>
                <p className="text-gray-600 mt-1">Industry Experience</p>
              </div>
            </div>
          </section>

          {/* FOUNDER SECTION NEXT */}
          <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <img
              src="/assets/VijayDole.png"
              alt="Vijay Dole"
              className="rounded-2xl shadow-lg w-full max-w-sm mx-auto md:mx-0 object-cover "
            />
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Vijay Dole</h2>
              <p className="text-gray-100 leading-relaxed">
                Vijay Dole is the visionary Co‑Founder & CEO behind LIMELIGHT. With
                deep industry expertise and creative insight, he has successfully
                led high‑impact campaigns across Maharashtra. Under his leadership,
                LIMELIGHT has become synonymous with innovative media strategies,
                creative branding, and result‑driven digital marketing solutions.
              </p>
            </div>
          </section>

          {/* ---------- DESCRIPTION ---------- */}
          <section className="text-lg text-white leading-8 max-w-5xl mx-auto text-justify">
            <p className="mb-6">
              At LIMELIGHT, we believe every brand has a unique story. Our job is to
              help you tell that story with impact. Whether it's a political
              campaign or a corporate launch, our team crafts tailored strategies
              that align with your goals and speak to your audience.
            </p>
            <p className="mb-6">
              With expertise in Social Media Management, Influencer Marketing, SEO,
              Paid Ads, and Creative Video Production, we are equipped to handle
              digital mandates of any scale. We manage ₹15+ lakh in Meta ad budgets
              and have executed projects for clients from Kolhapur to Nagpur.
            </p>
            <p className="mb-6">
              We don't just deliver services – we build partnerships. Our team of
              designers, media consultants, PR experts, and developers work in
              harmony to give you 360° digital solutions that convert.
            </p>
          </section>
        </div>
      </section>

      {/* ---------- CONTACT OUTSIDE BACKGROUND ---------- */}
      
     
      <Team />
      <Contact />
    </>
  );
}
