import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PopularServices from '../components/PopularServices';
import IndustryServices from "../components/IndustryServices"
import IntegrationSection from "../components/IntegrationSection"
import FreeSEOConsultation from "../components/FreeSEOConsultation"
import ProjectIdeaSection from "../components/ProjectIdeaSection"
import Frequentlyquestions from "../components/Frequentlyquestions"


function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full text-white">
        {/* Diagonal Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(70deg, #BA0F31 50%, #D81246 50%)`,
          }}
        />

        {/* Foreground Content */}
        <div className="relative z-10 px-4 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Overview */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Empowering Brands through Media, Digital Marketing & PR
              </h1>
              <p className="text-lg text-white/90">
                We are a results-driven agency helping brands shine with compelling campaigns,
                strategic promotions, and full-scale digital presence.
              </p>

              {/* Highlights Box */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 border border-white/20">
                <div className="flex items-center justify-between mb-3 border-b border-white/40 pb-2">
                  <h2 className="text-xl font-semibold">What Sets Us Apart</h2>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-yellow-300">Excellent</span>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-300 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09L5.5 12.5 1 8.91l6.061-.89L10 2.5l2.939 5.52L19 8.91l-4.5 3.59 1.378 5.59z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                  <li>6+ Years of Industry Experience</li>
                  <li>15 LAKH+ Ad Spend on Meta Platforms</li>
                  <li>Committed to Timely Delivery</li>
                  <li>Projects Across Maharashtra</li>
                </ul>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-[#BA0F31] font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-wrap justify-center gap-6">
              {/* Big iPhone (Vertical) */}
              <div className="relative w-[260px] h-[520px] bg-black rounded-[3rem] border-[10px] border-black shadow-xl overflow-hidden flex items-center justify-center">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20" />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[230px] h-[500px] object-cover rounded-[2rem]"
                >
                  <source src="/assets/IMG_3403.MP4" type="video/mp4" />
                </video>
                  
              </div>

              {/* Small iPhone (Vertical) with text below */}
              <div className=" hidden sm:block flex flex-col items-center">
                <div className=" relative w-[130px] h-[260px] bg-black rounded-[2rem] border-[6px] border-black shadow-md overflow-hidden flex items-center justify-center">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2 bg-black rounded-full z-20" />
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-[115px] h-[250px] object-cover rounded-[1.5rem]"
                  >
                    <source src="/assets/IMG_3404.MP4" type="video/mp4" />
                  </video>
                </div>

                {/* Caption below Small iPhone */}
                <p className="mt-3 text-white text-sm font-semibold">Want to make a video of your brand ?</p>
                <p className="mt-2 text-white text-sm font-semibold">#paid-promotion</p>
              </div>
            </div>


          </div>

        </div>
      </section>
      <PopularServices />
      <IndustryServices />
      <Frequentlyquestions />
      <ProjectIdeaSection />
    </div>
  );
}

export default Home;
