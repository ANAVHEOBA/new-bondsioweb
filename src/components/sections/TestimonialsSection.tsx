// src/components/sections/TestimonialsSection.tsx
import React from 'react';
import TestimonialCard from '../common/TestimonialCard';
import './TestimonialsSection.css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'KaiB',
      date: '22 Jul',
      role: 'Beta App User',
      avatar: '/avatar.png',
      text: 'KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai’s professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures.',
    },
    {
      name: 'KaiB',
      date: '22 Jul',
      role: 'Beta App User',
      avatar: '/avatar.png',
      text: 'KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai’s professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures.',
    },
    {
      name: 'KaiB',
      date: '22 Jul',
      role: 'Beta App User',
      avatar: '/avatar.png',
      text: 'KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai’s professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures.',
    },
    {
      name: 'KaiB',
      date: '22 Jul',
      role: 'Beta App User',
      avatar: '/avatar.png',
      text: 'KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai’s professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures.',
    },
    {
      name: 'KaiB',
      date: '22 Jul',
      role: 'Beta App User',
      avatar: '/avatar.png',
      text: 'KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai’s professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures.',
    },
    {
      name: 'KaiB',
      date: '22 Jul',
      role: 'Beta App User',
      avatar: '/avatar.png',
      text: 'KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai’s professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures.',
    },
  ];

  return (
    <section className="testimonials-section">
      <h3 className="section-title">Testimonials</h3>
      <h2 className="main-title">What Our Beta Users Are Saying...</h2>
      <p className="section-subtitle">
        We're just getting started, but the excitement is real.
      </p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            date={testimonial.date}
            role={testimonial.role}
            avatar={testimonial.avatar}
            text={testimonial.text}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;