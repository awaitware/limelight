import React, { useState } from "react";

const faqs = [
  {
    question: "Do you offer Social Media Marketing services?",
    answer:
      "Yes, we create and manage campaigns across platforms like Facebook, Instagram, Twitter, and LinkedIn tailored to your business goals.",
  },
  {
    question: "Can you help with Election Management?",
    answer:
      "Absolutely. We provide end-to-end digital strategies, content creation, and campaign execution for elections.",
  },
  {
    question: "Do you build websites and web apps?",
    answer:
      "Yes, we specialize in Web Design & Development, including responsive websites, web applications, and eCommerce stores.",
  },
  {
    question: "What is Search Engine Optimization (SEO)?",
    answer:
      "SEO improves your website's visibility in search engines like Google. We offer on-page, off-page, and technical SEO services.",
  },
  {
    question: "How do you manage Online Reputation (ORM)?",
    answer:
      "We monitor, analyze, and respond to reviews, build positive brand sentiment, and suppress negative content.",
  },
  {
    question: "Do you provide Audio Visual Production services?",
    answer:
      "Yes, we create high-quality videos, animations, and multimedia content for branding, promotions, and campaigns.",
  },
  {
    question: "Can you handle PR and Media Consulting?",
    answer:
      "Yes, we offer Public Relations (PR) services and strategic media consulting to enhance brand reputation and visibility.",
  },
  {
    question: "Do you offer Influencer Marketing?",
    answer:
      "Yes, we work with influencers across niches to promote your brand authentically to their engaged audience.",
  },
  {
    question: "Can you manage Paid Marketing Campaigns?",
    answer:
      "Yes, we run campaigns across Google Ads, Meta Ads, and other ad platforms focused on ROI and performance.",
  },
  {
    question: "Do you provide Bulk Messaging Solutions?",
    answer:
      "Yes, we offer bulk SMS, WhatsApp, and email campaign services to reach your audience efficiently.",
  },
  {
    question: "What is Strategy & Content Marketing?",
    answer:
      "It involves planning, creating, and distributing valuable content to attract and retain your target audience.",
  },
  {
    question: "How do you help with Advertising & Branding?",
    answer:
      "We help build your brand identity, run advertisements, and create creative assets to make your business stand out.",
  },
  {
    question: "Do you offer eCommerce Marketing services?",
    answer:
      "Yes, we optimize and promote your online store using strategies like SEO, ads, email marketing, and more.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Can’t find the answer you’re looking for? Ask our {" "}
            <a href="/contact" className="text-primary underline font-medium">
              customer support
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl bg-white">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="text-gray-900 font-medium text-lg">{faq.question}</span>
                <span className="text-xl">{activeIndex === idx ? "-" : "+"}</span>
              </button>
              {activeIndex === idx && (
                <div className="px-5 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
