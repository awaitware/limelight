import React, { useEffect } from 'react'

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 font-poppins text-gray-700 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#D71245]">Terms & Conditions</h1>

      <p className="mb-4">
        These Terms & Conditions ("Terms") govern your use of the LIMELIGHT website and services. By accessing or using our services, you agree to be bound by these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-black">1. Use of Services</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account and for all activities under it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-black">2. Intellectual Property</h2>
      <p className="mb-4">
        All content, logos, graphics, and materials on this site are the intellectual property of LIMELIGHT or its licensors. Unauthorized use is strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-black">3. User Responsibilities</h2>
      <p className="mb-4">
        You must not misuse our services or post any offensive, harmful, or illegal content. We reserve the right to suspend or terminate access to our services for violations.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-black">4. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any damages arising from the use or inability to use our services. Our total liability is limited to the amount paid by you for our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-black">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting to this page.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-black">6. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of India. Any disputes arising will be subject to the exclusive jurisdiction of the courts in Maharashtra.
      </p>

      <p className="mt-8 text-sm text-gray-500">Last updated: July 2025</p>
    </div>
  )
}
