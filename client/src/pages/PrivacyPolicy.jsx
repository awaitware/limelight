import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 font-poppins text-gray-700 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#D71245]">Privacy Policy</h1>

      <p className="mb-4">
        At LIMELIGHT, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">1. Information We Collect</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Personal details like name, email, phone number, and organization.</li>
        <li>Service preferences and messages you submit via our forms.</li>
        <li>Usage data such as pages visited, browser type, and device information.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>To respond to your inquiries or service requests.</li>
        <li>To provide marketing and promotional updates with your consent.</li>
        <li>To improve our website performance and customer experience.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">3. Data Protection</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your data. We do not share your personal information with third parties except where required by law or with your consent.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">4. Cookies & Analytics</h2>
      <p className="mb-4">
        We may use cookies and Google Analytics to understand how visitors interact with our site. These tools help us enhance functionality and user experience.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">5. Third-Party Services</h2>
      <p className="mb-4">
        Our site may link to third-party platforms such as social media. We are not responsible for their privacy practices. Please review their privacy policies separately.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">6. Your Rights</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>You may request access or correction to your personal data.</li>
        <li>You can opt out of promotional communications anytime.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">7. Changes to this Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy occasionally. Updates will be posted on this page with a revised effective date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">8. Contact Us</h2>
      <p>
        If you have questions or concerns about our Privacy Policy, please contact us at:
      </p>
      <ul className="mt-2 space-y-1 text-sm">
        <li><strong>Email:</strong> <a href="mailto:limelightprsolutions@gmail.com" className="text-[#D71245] hover:underline">limelightprsolutions@gmail.com</a></li>
        <li><strong>Phone:</strong> +91 8070 703 008</li>
        <li><strong>Address:</strong> 202, Sai Sharan Apartment, Bhide Chowk, Savedi, Ahilyanagar - 414003</li>
      </ul>

      <p className="mt-10 text-xs text-gray-500">Effective Date: July 13, 2025</p>
    </div>
  );
}
