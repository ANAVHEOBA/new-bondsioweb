// src/components/sections/FaqSection.tsx
import React from 'react';
import FaqItem from '../common/FaqItem';
import './FaqSection.css';

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: 'How can I find community near me?',
      answer: 'You have to have an established company that is registered. Your business model needs to be in a startup mindset, scalable, have international potential, and have a unique idea.',
    },
    {
      question: 'Does Bondsio offer only community events?',
      answer: 'Yes, currently we focus on connecting users through community events, but we’re expanding to include meetups, workshops, and networking sessions.',
    },
    {
      question: 'Can I meet friends with the app?',
      answer: 'Absolutely! The app allows you to connect with friends and see their activity, join shared events, and chat directly within the platform.',
    },
    {
      question: 'Does Bondsio offer recommendations about what event to attend?',
      answer: 'Yes, our AI-powered recommendation engine suggests events based on your interests, location, and past interactions.',
    },
    {
      question: 'What kind of community are listed on Bondsio?',
      answer: 'We feature tech startups, creative communities, wellness groups, local clubs, and professional networks across cities worldwide.',
    },
    {
      question: 'How much do I pay for the app?',
      answer: 'The app is free to download and use. Premium features like advanced search and analytics require a subscription starting at $9.99/month.',
    },
    {
      question: 'What are the fees for using Bondsio?',
      answer: 'There are no transaction fees. We charge a small monthly fee for premium accounts to support ongoing development and security.',
    },
  ];

  return (
    <section className="faq-section">
      <h3 className="section-title">FAQs</h3>
      <h2 className="main-title">What are your hidden thoughts...</h2>
      <p className="section-subtitle">
        It implies that the individual possesses the necessary skills, knowledge, and resources to complete a given task successfully. A capable person is confident.
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;