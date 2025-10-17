import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaPhoneAlt, FaEnvelope
} from 'react-icons/fa';
import { sendContactForm } from '../services/emailService';

const allServices = [
  "Public Relations (PR)", "Media Consulting", "Election Management",
  "Social Media Marketing", "Paid Marketing Campaign", "Influencer Marketing",
  "Advertising & Branding", "eCommerce Marketing", "Search Engine Optimization",
  "Web Design & Development", "Audio Visuals Production",
  "Strategy & Content Marketing", "Bulk Messaging Solutions",
  "Online Reputation Management (ORM)"
];

export default function Contact() {
  const location = useLocation();
  const selectedService = location.state?.service || '';
  const selectedPlan = location.state?.plan || '';

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    organization: '',
    services: [],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.organization.trim()) newErrors.organization = "Organization name is required";
    if (form.services.length === 0) newErrors.services = "Select at least one service";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    const updatedServices = checked
      ? [...form.services, value]
      : form.services.filter(service => service !== value);
    setForm(prev => ({ ...prev, services: updatedServices }));
    if (errors.services && updatedServices.length > 0) {
      setErrors(prev => ({ ...prev, services: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await sendContactForm(form);
      setStatus('✅ Message sent successfully!');
      setForm({ firstName: '', lastName: '', phone: '', email: '', organization: '', services: [], message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (err) {
      setStatus('❌ Failed to send message.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-poppins mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#D71245]">Contact Us</h2>

          <div className="text-sm space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">Head Office - Ahilyanagar</h4>
              <p>202, Sai Sharan Apartment, Bhide Chowk, Savedi, Ahilyanagar - 414003</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Branch - Pune</h4>
              <p>Freelancer Team</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#D71245]" /> +91 8070 703 008
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#D71245]" /> limelightprsolutions@gmail.com
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="p-2 bg-[#D71245] text-white rounded-full"><FaFacebookF /></a>
              <a href="#" className="p-2 bg-[#D71245] text-white rounded-full"><FaTwitter /></a>
              <a href="#" className="p-2 bg-[#D71245] text-white rounded-full"><FaInstagram /></a>
              <a href="#" className="p-2 bg-[#D71245] text-white rounded-full"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              title="Head Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1594265224567!2d74.7260433!3d19.1399454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4c78d1d7d05a1%3A0xf5c2a79e2acb3aa2!2sSavedi%2C%20Ahmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689249672143"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>

          {selectedService && selectedPlan && (
            <div className="text-sm text-gray-600 mb-4">
              <p><strong>Selected Service:</strong> {selectedService}</p>
              <p><strong>Selected Plan:</strong> {selectedPlan}</p>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name"
                  className="text-sm border border-[#D81246] rounded px-3 py-2 w-full focus:ring-[#D81246]" />
                {errors.firstName && <span className="text-xs text-red-600">{errors.firstName}</span>}
              </div>
              <div>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name"
                  className="text-sm border border-[#D81246] rounded px-3 py-2 w-full focus:ring-[#D81246]" />
                {errors.lastName && <span className="text-xs text-red-600">{errors.lastName}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone No"
                  className="text-sm border border-[#D81246] rounded px-3 py-2 w-full focus:ring-[#D81246]" />
                {errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}
              </div>
              <div>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email"
                  className="text-sm border border-[#D81246] rounded px-3 py-2 w-full focus:ring-[#D81246]" />
                {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
              </div>
            </div>

            <div>
              <input type="text" name="organization" value={form.organization} onChange={handleChange} placeholder="Organization Name"
                className="text-sm border border-[#D81246] rounded px-3 py-2 w-full focus:ring-[#D81246]" />
              {errors.organization && <span className="text-xs text-red-600">{errors.organization}</span>}
            </div>

            <fieldset className="border border-[#D81246] rounded px-4 py-3">
              <legend className="text-sm font-semibold mb-2 text-gray-800">Select Service</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {allServices.map((service, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-[#D81246]"
                      value={service}
                      checked={form.services.includes(service)}
                      onChange={handleCheckbox}
                    />
                    {service}
                  </label>
                ))}
              </div>
              {errors.services && <span className="text-xs text-red-600 block mt-2">{errors.services}</span>}
            </fieldset>

            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (optional)" rows="4"
              className="text-sm border border-[#D81246] rounded px-3 py-2 w-full focus:ring-[#D81246]" />

            <button type="submit" className="bg-[#D71245] text-white font-semibold px-6 py-2 rounded hover:bg-[#ba0f31]">
              Submit
            </button>

            {status && <p className="text-sm mt-2 text-green-600">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}