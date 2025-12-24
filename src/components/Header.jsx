import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: 'linear-gradient(90deg, #ff7a00, #ff9e2c)',
  color: '#0f172a',
  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
};

const navListStyle = {
  display: 'flex',
  gap: '1rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: '#0f172a',
  textDecoration: 'none',
  fontWeight: 600,
  padding: '0.35rem 0.65rem',
  borderRadius: '0.5rem',
};

const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  fontWeight: 700,
  fontSize: '1.1rem',
  letterSpacing: '0.5px',
};

const logoStyle = {
  height: '38px',
  width: '38px',
  objectFit: 'contain',
  borderRadius: '0.5rem',
  backgroundColor: 'rgba(255,255,255,0.65)',
  padding: '0.25rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
};

const Header = () => (
  <header style={headerStyle}>
    <div style={brandStyle}>
      <img src="/photos/bjp.png" alt="भाजप लोगो" style={logoStyle} className="bjp-logo-spin" />
    </div>
    <nav>
      <ul style={navListStyle}>
        {[
          { to: '/', label: 'मुखपृष्ठ' },
          { to: '/events', label: 'कार्यक्रम' },
          { to: '/media', label: 'मीडिया' },
          { to: '/about', label: 'आमच्याबद्दल' },
          { to: '/contact', label: 'संपर्क' },
          { to: '/admin/posts/new', label: 'ॲडमिन पोस्ट' },
        ].map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
