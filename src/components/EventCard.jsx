import React from 'react';

const EventCard = ({ title, date, location, description }) => (
  <article
    style={{
      border: '1px solid #e2e8f0',
      borderRadius: '0.75rem',
      padding: '1rem',
      backgroundColor: '#f8fafc',
      display: 'grid',
      gap: '0.35rem',
      boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
    }}
  >
    <h4 style={{ margin: 0, color: '#b45309' }}>{title}</h4>
    <div style={{ fontWeight: 600, color: '#0f172a' }}>{date}</div>
    <div style={{ color: '#475569' }}>{location}</div>
    <p style={{ margin: '0.25rem 0 0', color: '#0f172a', lineHeight: 1.5 }}>{description}</p>
  </article>
);

export default EventCard;
