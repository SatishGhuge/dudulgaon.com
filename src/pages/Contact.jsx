import React from 'react';

const Contact = () => (
  <main
    style={{
      minHeight: '70vh',
      padding: '2rem 1.5rem',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(180deg, #fff7ed, #f8fafc)',
    }}
  >
    <section
      style={{
        maxWidth: '820px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid #bfdbfe',
        boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
        display: 'grid',
        gap: '0.8rem',
      }}
    >
      <h1 style={{ margin: 0, color: '#1d4ed8' }}>संपर्क</h1>
      <p style={{ margin: 0, color: '#334155', lineHeight: 1.6 }}>
        आपले प्रश्न, सूचना किंवा सहकार्याबद्दल आम्हाला कळवा.
      </p>
      <div style={{ display: 'grid', gap: '0.35rem', color: '#0f172a' }}>
        <div>ईमेल: contact@example.com</div>
        <div>फोन: +91-00000-00000</div>
        <div>पत्ता: भाजप कार्यालय, मोशी, पुणे</div>
      </div>
      <p style={{ margin: '0.35rem 0 0', color: '#475569' }}>
        सोशल मीडियावर जोडलेले रहा आणि कार्यक्रमांच्या अद्यतनांसाठी नियमित पाहणी करा.
      </p>
    </section>
  </main>
);

export default Contact;
