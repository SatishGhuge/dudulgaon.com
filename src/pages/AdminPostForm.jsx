import React, { useState } from 'react';

const pageStyle = {
  minHeight: '70vh',
  padding: '2rem 1.5rem',
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  background: 'linear-gradient(180deg, #fff7ed, #f8fafc)',
};

const formCard = {
  maxWidth: '900px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '1rem',
  padding: '1.5rem',
  border: '1px solid #fed7aa',
  boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
  display: 'grid',
  gap: '0.9rem',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.25rem',
  fontWeight: 600,
  color: '#9a3412',
};

const inputStyle = {
  width: '100%',
  padding: '0.6rem 0.75rem',
  borderRadius: '0.6rem',
  border: '1px solid #fed7aa',
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '120px',
  resize: 'vertical',
};

const submitStyle = {
  border: 'none',
  borderRadius: '999px',
  padding: '0.7rem 1.4rem',
  background: 'linear-gradient(90deg, #f97316, #ea580c)',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 700,
  justifySelf: 'flex-start',
};

const AdminPostForm = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    alert(`नवीन पोस्ट (डेमो):\nशीर्षक: ${title}\nटॅग्स: ${tags}\nमजकूर: ${body.slice(0, 120)}...`);
    setTitle('');
    setTags('');
    setBody('');
  };

  return (
    <main style={pageStyle}>
      <section style={formCard}>
        <h1 style={{ margin: 0, color: '#b45309' }}>ॲडमिन पोस्ट फॉर्म</h1>
        <p style={{ margin: 0, color: '#4b5563' }}>
          येथे दिलेला फॉर्म केवळ डेमो आहे. प्रत्यक्ष सिस्टीममध्ये हे डेटा सर्व्हरवर जतन केले जाईल.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
          <div>
            <label style={labelStyle}>शीर्षक</label>
            <input
              style={inputStyle}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="उदा. स्वच्छता मोहिम किंवा युवक मेळावा"
            />
          </div>
          <div>
            <label style={labelStyle}>टॅग्स (स्वल्पविरामाने वेगळे करा)</label>
            <input
              style={inputStyle}
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="उदा. समुदाय, युवा, घोषणा"
            />
          </div>
          <div>
            <label style={labelStyle}>तपशील</label>
            <textarea
              style={textareaStyle}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="कार्यक्रमाचे संक्षिप्त वर्णन आणि महत्त्व येथे लिहा..."
            />
          </div>
          <button type="submit" style={submitStyle}>
            पोस्ट जतन करा (डेमो)
          </button>
        </form>
      </section>
    </main>
  );
};

export default AdminPostForm;


