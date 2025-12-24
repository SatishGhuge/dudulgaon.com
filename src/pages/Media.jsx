import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const mediaWrapper = {
  minHeight: '70vh',
  padding: '2rem 1.5rem',
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  background: 'linear-gradient(180deg, #fff7ed, #f8fafc)',
  color: '#0f172a',
};

const grid = {
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'grid',
  gap: '1.25rem',
};

const card = {
  backgroundColor: '#ffffff',
  borderRadius: '1rem',
  padding: '1rem',
  border: '2px solid #f97316',
  boxShadow: '0 10px 22px rgba(0,0,0,0.1)',
  display: 'grid',
  gap: '0.5rem',
};

const iframeStyle = {
  width: '100%',
  aspectRatio: '16/9',
  border: 'none',
  borderRadius: '0.8rem',
  boxShadow: '0 8px 18px rgba(0,0,0,0.12)',
};

const Media = () => (
  <main style={mediaWrapper}>
    <div style={grid}>
      <div>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#c2410c', fontWeight: 800 }}>
          मीडिया
        </p>
        <h1 style={{ margin: '0.3rem 0 0', color: '#9a3412' }}>व्हिडिओ हायलाइट्स</h1>
      </div>

      <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={card}>
          <strong>कॅम्पेन क्लिप</strong>
          <iframe
            style={iframeStyle}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Campaign Highlight"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p style={{ margin: 0, color: '#475569' }}>अलीकडील सार्वजनिक कार्यक्रमाचे ठळक क्षण.</p>
        </div>

        <div style={card}>
          <strong>समुदाय संवाद</strong>
          <iframe
            style={iframeStyle}
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="Community Talk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p style={{ margin: 0, color: '#475569' }}>समुदायाशी संवाद आणि योजनांची माहिती.</p>
        </div>

        <div style={card}>
          <strong>Instagram रील</strong>
          <InstagramEmbed
            url="https://www.instagram.com/reel/C8SaRYDqd2r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            width={400}
            placeholder={<p>Loading Instagram Reel...</p>}
          />
          <p style={{ margin: 0, color: '#475569' }}>Instagram रील लिंक: https://www.instagram.com/reel/C8SaRYDqd2r/</p>
        </div>
      </section>
    </div>
  </main>
);

export default Media;


