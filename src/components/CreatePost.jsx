import React, { useState } from 'react';

const cardStyle = {
  backgroundColor: '#fff7ed',
  border: '1px solid #fed7aa',
  borderRadius: '0.75rem',
  padding: '1rem',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
};

const CreatePost = () => {
  const [text, setText] = useState('');
  const [topic, setTopic] = useState('Announcement');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    alert(`Pretend post submitted!\nTopic: ${topic}\nMessage: ${text.trim()}`);
    setText('');
  };

  return (
    <section id="share" style={cardStyle}>
      <h3 style={{ margin: '0 0 0.75rem 0', color: '#9a3412' }}>Create a post</h3>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Topic
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{
              display: 'block',
              marginTop: '0.25rem',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #fb923c',
              width: '100%',
            }}
          >
            <option>Announcement</option>
            <option>Event update</option>
            <option>Volunteer call</option>
            <option>Media highlight</option>
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Message
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder="Share an update with the community..."
            style={{
              width: '100%',
              marginTop: '0.25rem',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              border: '1px solid #fb923c',
              resize: 'vertical',
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #f97316, #fb923c)',
            color: '#fff',
            border: 'none',
            padding: '0.65rem 1rem',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          Post update
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
