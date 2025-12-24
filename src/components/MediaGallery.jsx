import React from 'react';

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
};

const MediaGallery = ({ items = [] }) => (
  <section>
    <h3 style={{ margin: '0 0 0.75rem 0', color: '#b45309' }}>Media highlights</h3>
    {items.length === 0 ? (
      <p style={{ color: '#475569' }}>No media to show yet.</p>
    ) : (
      <div style={gridStyle}>
        {items.map((item) => (
          <figure
            key={item.id}
            style={{
              margin: 0,
              border: '1px solid #e2e8f0',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{ padding: '0.75rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</div>
              <div style={{ color: '#475569', fontSize: '0.9rem' }}>{item.caption}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    )}
  </section>
);

export default MediaGallery;
