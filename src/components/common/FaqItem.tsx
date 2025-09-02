// src/components/common/FaqItem.tsx
import React, { useState } from 'react';
import './FaqItem.css';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="faq-text">{question}</span>
        {/* Show + when closed, × when open */}
        <img
          src={isOpen ? '/plus-icon.png' : '/close-icon.png'}
          alt={isOpen ? 'Close' : 'Open'}
          className="faq-icon"
        />
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;