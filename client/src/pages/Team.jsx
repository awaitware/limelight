import React, { useEffect, useState, useRef } from 'react';
import PopularServices from '../components/PopularServices'; 
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaPlay,
} from 'react-icons/fa';
import Modal from 'react-modal';

const teamMembers = [
  {
    name: 'Vijay Dole',
    role: 'Co-Founder & CEO',
    image: '/assets/VijayDole.png',
    social: { instagram: '#', twitter: '#', linkedin: '#', facebook: '#' },
  },
  {
    name: 'Siddhi',
    role: 'Social Media Influencer',
    image: '/assets/Siddhi.png',
    social: { instagram: '#', twitter: '#', linkedin: '#', facebook: '#' },
  },
  {
    name: 'Akash Chabukswar',
    role: 'Senior Graphic Designer & Video Editor',
    image: '/assets/AkashChabukswar.png',
    social: { instagram: '#', twitter: '#', linkedin: '#', facebook: '#' },
  },
  {
    name: 'Aditya Keware',
    role: 'Junior Graphic Designer & Video Editor',
    image: '/assets/AdityaKeware.png',
    social: { instagram: '#', twitter: '#', linkedin: '#', facebook: '#' },
  },
];

const funVideos = [
  '/assets/IMG_3402.MP4',
  '/assets/IMG_3403.MP4',
  '/assets/IMG_3404.MP4',
];

Modal.setAppElement('#root');

export default function Team() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openModal = () => {
    setIsOpen(true);
    setCurrentIndex(0);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(0);
  };

  const handleVideoEnd = (index) => {
    if (index < funVideos.length - 1) {
      setCurrentIndex(index + 1);
      videoRefs.current[index + 1]?.play();
    }
  };

  return (
    <>
      {/* Blur Background Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"></div>
      )}

      {/* Team Section */}
      <div
        id="team-container"
        className={`max-w-7xl mx-auto px-4 py-16 text-center font-poppins mt-10 transition-all duration-300 ${
          isOpen ? 'blur-md scale-[0.98]' : ''
        }`}
      >
        <h2 className="text-4xl font-extrabold text-[#D81246] mb-2">
          Our Digital Dream Team
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          We’re a passionate mix of marketers, designers, and creators committed to elevating your online presence.
        </p>

        <button
          onClick={openModal}
          className="flex items-center gap-2 justify-center mx-auto text-white bg-[#D81246] px-5 py-2 rounded-full font-semibold hover:bg-[#b9103b] transition mb-10"
        >
          <FaPlay className="text-sm" /> Watch Our Team Creative Video
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className={`rounded-lg mb-4 w-full object-cover object-top
                  ${member.name === 'Siddhi'
                    ? 'h-[240px]'
                    : member.name === 'Vijay Dole'
                      ? 'h-[260px]'
                      : member.name === 'Akash Chabukswar'
                        ? 'h-[230px]'
                        : member.name === 'Aditya Keware'
                          ? 'h-[250px]'
                          : 'h-[240px]'
                  }`}
              />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>

              <div className="flex justify-center gap-3 mt-4">
                <a href={member.social.facebook} className="p-2 rounded-full bg-[#D81246] text-white hover:scale-110 transition">
                  <FaFacebookF />
                </a>
                <a href={member.social.instagram} className="p-2 rounded-full bg-[#D81246] text-white hover:scale-110 transition">
                  <FaInstagram />
                </a>
                <a href={member.social.linkedin} className="p-2 rounded-full bg-[#D81246] text-white hover:scale-110 transition">
                  <FaLinkedinIn />
                </a>
                <a href={member.social.twitter} className="p-2 rounded-full bg-[#D81246] text-white hover:scale-110 transition">
                  <FaTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>

       
      </div>
      <PopularServices />
      {/* Reel Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Reel Video"
        className="bg-white p-4 rounded-lg w-[360px] max-w-full h-[90vh] overflow-y-scroll space-y-4 relative z-50 shadow-2xl outline-none mt-20"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-transparent z-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-[#D81246] text-xl font-bold"
        >
          ✕
        </button>

        {funVideos.map((video, i) => (
          <video
            key={i}
            ref={(el) => (videoRefs.current[i] = el)}
            src={video}
            muted={false}
            controls
            autoPlay={i === currentIndex}
            onEnded={() => handleVideoEnd(i)}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        ))}
      </Modal>
    </>
  );
}
