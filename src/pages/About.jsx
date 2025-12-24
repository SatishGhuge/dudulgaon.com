import React from 'react';

const About = () => (
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
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid #fde68a',
        boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
        display: 'grid',
        gap: '0.8rem',
      }}
    >
      <h1 style={{ margin: 0, color: '#b45309' }}>आमच्याबद्दल</h1>
      <p style={{ margin: 0, color: '#334155', lineHeight: 1.6 }}>
        भाजप सोशल हब हा स्थानिक समर्थक, स्वयंसेवक आणि नागरिकांना जोडणारा डिजिटल मंच आहे. स्थानिक प्रश्न,
        विकासकामे, कार्यक्रम आणि सामाजिक उपक्रमांची माहिती येथे सहज उपलब्ध होते.
      </p>
      <p style={{ margin: 0, color: '#334155', lineHeight: 1.6 }}>
        आपल्या अभिप्राय, सूचना आणि सहभागामुळेच हा उपक्रम अधिक सक्षम होईल. चला, एकत्रितपणे आपल्या परिसराच्या
        प्रगतीसाठी काम करूया.
      </p>
    </section>
  </main>
);

export default About;
