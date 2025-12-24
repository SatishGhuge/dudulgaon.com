import React from 'react';
import { Link } from 'react-router-dom';

const badgeStyle = {
  display: 'inline-block',
  padding: '0.2rem 0.6rem',
  borderRadius: '999px',
  backgroundColor: '#ffe4c7',
  color: '#9a3412',
  fontSize: '0.8rem',
  fontWeight: 700,
};

const PostCard = ({ id, author, time, content, tags = [] }) => (
  <article
    style={{
      border: '1px solid #e2e8f0',
      borderRadius: '0.75rem',
      padding: '1rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
    }}
  >
    <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
      <div>
        <strong>{author}</strong>
        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{time}</div>
      </div>
      <div>
        {tags.map((tag) => (
          <span key={tag} style={{ ...badgeStyle, marginLeft: '0.3rem' }}>
            {tag}
          </span>
        ))}
      </div>
    </header>
    <p style={{ margin: '0 0 0.5rem 0', lineHeight: 1.6, color: '#0f172a' }}>{content}</p>
    <div style={{ marginTop: '0.25rem' }}>
      <Link
        to={`/posts/${id}`}
        style={{
          display: 'inline-block',
          padding: '0.35rem 0.8rem',
          borderRadius: '999px',
          background: 'linear-gradient(90deg, #f97316, #ea580c)',
          color: '#fff',
          fontSize: '0.85rem',
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        सविस्तर वाचा
      </Link>
    </div>
  </article>
);

export default PostCard;
