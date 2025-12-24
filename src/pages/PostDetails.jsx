import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const pageStyle = {
  minHeight: '70vh',
  padding: '2rem 1.5rem',
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  background: 'linear-gradient(180deg, #fff7ed, #f8fafc)',
};

const cardStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '1rem',
  padding: '1.5rem',
  border: '1px solid #fed7aa',
  boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
  display: 'grid',
  gap: '0.6rem',
};

const tagStyle = {
  display: 'inline-block',
  padding: '0.25rem 0.7rem',
  borderRadius: '999px',
  backgroundColor: '#f97316',
  color: '#fff',
  fontSize: '0.85rem',
  fontWeight: 700,
  marginRight: '0.4rem',
};

const primaryBtnStyle = {
  border: 'none',
  borderRadius: '999px',
  padding: '0.5rem 1rem',
  background: 'linear-gradient(90deg, #f97316, #ea580c)',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 700,
};

const samplePosts = {
  1: {
    title: 'स्वच्छता मोहिम – वॉर्ड ८',
    author: 'किरण शर्मा',
    time: '२ तासांपूर्वी',
    body: 'वॉर्ड ८ मधील स्वच्छता मोहिमेत नागरिकांचा उत्स्फूर्त सहभाग दिसून आला. स्वयंसेवकांनी रस्ते, गटारे आणि सार्वजनिक ठिकाणांची स्वच्छता केली.',
    tags: ['समुदाय', 'स्वच्छता', 'स्वयंसेवक'],
  },
  2: {
    title: 'युवकांसाठी कौशल्य-विकास कार्यशाळा',
    author: 'रवि नारायण',
    time: '४ तासांपूर्वी',
    body: 'स्थानिक युवकांना नोकरी आणि उद्योजकतेसाठी आवश्यक कौशल्यांबाबत मार्गदर्शन करण्यासाठी विशेष कार्यशाळा आयोजित करण्यात येत आहे.',
    tags: ['युवा', 'घोषणा'],
  },
};

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = samplePosts[id];

  return (
    <main style={pageStyle}>
      <article style={cardStyle}>
        {post ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h1 style={{ margin: 0, color: '#b45309' }}>{post.title}</h1>
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>{post.time}</div>
            </div>
            <div style={{ color: '#4b5563', fontWeight: 600 }}>लेखक: {post.author}</div>
            <div>
              {post.tags.map((t) => (
                <span key={t} style={tagStyle}>
                  {t}
                </span>
              ))}
            </div>
            <p style={{ margin: '0.4rem 0 0', lineHeight: 1.7, color: '#111827' }}>{post.body}</p>
          </>
        ) : (
          <p style={{ margin: 0, color: '#4b5563' }}>ही पोस्ट सापडली नाही.</p>
        )}
        <div style={{ marginTop: '0.75rem' }}>
          <button type="button" style={primaryBtnStyle} onClick={() => navigate(-1)}>
            मागे जा
          </button>
        </div>
      </article>
    </main>
  );
};

export default PostDetails;


