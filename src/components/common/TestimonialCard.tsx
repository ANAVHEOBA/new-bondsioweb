// src/components/common/TestimonialCard.tsx
import React from 'react';
import './TestimonialCard.css';

interface TestimonialProps {
  name: string;
  date: string;
  role: string;
  avatar?: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, date, role, avatar, text }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={avatar || '/avatar.png'} alt={name} className="avatar" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-date">· {date}</span>
          <span className="user-role">{role}</span>
        </div>
      </div>
      <p className="testimonial-text">{text}</p>
    </div>
  );
};

export default TestimonialCard;