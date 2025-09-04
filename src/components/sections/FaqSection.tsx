import React from 'react';
import FaqItem from '../common/FaqItem';
import './FaqSection.css';

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: 'Do I have to be super social to use Bondsio?',
      answer: 'Not at all. We built Bondsio for you, exactly as you are. Whether you\'re outgoing or prefer your own space, Bondsio meets you where you are and helps you connect at your own pace.',
    },
    {
      question: 'What makes Bondsio different?',
      answer: 'Bondsio turns moments into communities. It’s not about constant scrolling — it’s about meaningful connections that grow naturally from real-life experiences.',
    },
    {
      question: 'How do I know it\'s safe?',
      answer: 'Your privacy and safety are our top priorities. We use end-to-end encryption, community moderation, and clear reporting tools to keep interactions respectful and secure.',
    },
    {
      question: 'Is Bondsio available everywhere?',
      answer: 'Yes, Bondsio is available globally. As long as you have internet access, you can join communities and events near you — no matter where you are.',
    },
    {
      question: 'What kind of community are listed on Bondsio?',
      answer: 'We feature a wide range of communities — from wellness and fitness groups to arts & culture, professional networks, and local meetups — all centered around shared interests.',
    },
    {
      question: 'Can I create my own circle or activity?',
      answer: 'Absolutely! You can start your own "Bond" — whether it’s a weekly coffee meetup, a book club, or a hiking group — and invite others to join.',
    },
    {
      question: 'Is Bondsio free to use?',
      answer: 'Yes, Bondsio is completely free to download and use. There are no hidden fees or subscription costs — just authentic connection.',
    },
  ];

  return (
    <section className="faq-section">
      <h3 className="section-title">FAQs</h3>
      <h2 className="main-title">Got Questions?</h2>
      <p className="section-subtitle">
        We've kept it simple—your most common questions, answered.
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