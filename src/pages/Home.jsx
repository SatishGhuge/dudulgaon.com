import React, { useEffect, useState } from 'react';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import EventCard from '../components/EventCard';
import MediaGallery from '../components/MediaGallery';

const posts = [
  {
    id: 1,
    author: 'Kiran Sharma',
    time: '२ तासांपूर्वी',
    content: 'वॉर्ड ८ मधील स्वच्छता मोहिमेत सहभागी झालेल्या सर्वांचे आभार!',
    tags: ['समुदाय', 'स्वयंसेवक'],
  },
  {
    id: 2,
    author: 'Ravi Narayan',
    time: '४ तासांपूर्वी',
    content: 'स्थानिक युवकांसाठी पुढील आठवड्यात नवीन कौशल्य-विकास कार्यशाळा जाहीर.',
    tags: ['घोषणा'],
  },
];

const events = [
  {
    id: 1,
    title: 'टाउन हॉल बैठक',
    date: '१२ जानेवारी २०२६',
    location: 'कम्युनिटी सेंटर, सेक्टर १४',
    description: 'टीमसोबत खुले प्रश्नोत्तरे व आगामी नागरी प्रकल्पांबद्दल माहिती.',
  },
  {
    id: 2,
    title: 'स्वयंसेवक परिचय सत्र',
    date: '२० जानेवारी २०२६',
    location: 'भाजप कार्यालय, मेन रोड',
    description: 'नवीन स्वयंसेवक आणि मोहिम समन्वयकांसाठी प्रशिक्षण सत्र.',
  },
];

const mediaItems = [
  {
    id: 1,
    title: 'युवा संपर्क मोहीम',
    caption: 'मागील आठवड्यातील युवा रॅलीला उत्तम प्रतिसाद.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'समाज स्वच्छता उपक्रम',
    caption: 'स्वयंसेवकांनी मिळून परिसर स्वच्छ ठेवण्यासाठी प्रयत्न केले.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'कार्यशाळा सुरू आहे',
    caption: 'पहिल्यांदा मतदारांसाठी कौशल्य विकास कार्यशाळा.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
  },
];

const galleryItems = [
  { src: '/photos/img1.jpeg', caption: 'आपल्या क्षणांचे पोस्टर' },
  { src: '/photos/img2.jpeg', caption: 'सामाजिक उपक्रमांचे क्षण' },
  { src: '/photos/img3.jpeg', caption: 'सामाजिक उपक्रमांचे क्षण' },
  { src: '/photos/img4.jpeg', caption: 'सामाजिक उपक्रमांचे क्षण' },
];

const infoBlocks = [
  {
    title: 'सेवा १',
    text: 'समुदाय प्रश्न, तात्काळ मदत आणि लोकांशी थेट संवाद.',
  },
  {
    title: 'सेवा २',
    text: 'कार्यक्रम नियोजन, स्वयंसेवक समन्वय आणि मैदानी आयोजन.',
  },
  {
    title: 'सेवा ३',
    text: 'लोकसहभाग वाढवणारे सत्र, प्रशिक्षण आणि प्रेरणादायी चर्चा.',
  },
];

const specialEvent = {
  date: '२३ डिसेंबर २०२५',
  title: 'सार्वजनिक कार्यक्रम',
  subtitle: 'भाजपा ',
  description: '२३ डिसेंबर रोजी राज नगरमध्ये सार्वजनिक कार्यक्रमासाठी उपस्थित.',
  time: 'वेळ: सकाळी १०:५०',
  place: 'स्थान: भाजप कार्यालय, मोशी',
  image: '/photos/img42.jpeg',
};

const sectionStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '2rem 1.25rem',
  display: 'grid',
  gap: '1.5rem',
};

const homeSectionStyle = {
  width: '100%',
  maxWidth: '100%',
  padding: 0,
  margin: '0 0 1.75rem 0',
};

const heroCardBaseStyle = {
  border: '1px solid rgb(185, 182, 179)',
  borderRadius: '1rem',
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  padding: '3rem 2rem',
  boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
  background: 'linear-gradient(135deg, #fffdf9, #fff7ed)',
};

const posterSlides = [
  { src: '/photos/img42.jpeg', line: 'आम्ही नेहमी तुमच्या मदतीसाठी तयार.' },
  { src: '/photos/img9.jpeg', line: 'सामाजिक जाण आणि तात्काळ प्रतिसाद.' },
  { src: '/photos/img10.jpeg', line: 'स्नेहभेटी, प्रेरणादायी क्षण आणि लोकसहभाग.' },
  { src: '/photos/img11.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
  { src: '/photos/img12.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
  { src: '/photos/img13.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
  { src: '/photos/img14.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
  { src: '/photos/img15.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
  { src: '/photos/img16.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
  { src: '/photos/img17.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
  { src: '/photos/img18.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
  { src: '/photos/img19.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
  { src: '/photos/img20.jpeg', line: 'स्थानिक उपक्रमांना जोडणारी टीम आणि उत्साह.' },
];

const Home = () => {
  const [posterIndex, setPosterIndex] = useState(0);

  useEffect(() => {
    if (posterSlides.length < 2) return undefined;
    const id = setInterval(() => setPosterIndex((i) => (i + 1) % posterSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const poster = posterSlides[posterIndex];

  return (
    <main style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', backgroundColor: '#fff' }}>
      <section id="home" style={homeSectionStyle}>
        <div
          style={{
            ...heroCardBaseStyle,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(260px, 1.1fr) minmax(260px, 1.2fr)',
              gap: '1.5rem',
              width: '100%',
              alignItems: 'stretch',
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '0.9rem',
                overflow: 'hidden',
                boxShadow: '0 10px 24px rgba(0,0,0,0.12)',
                border: '2px solid #d90429',
              }}
            >
              <img
                src="/photos/pcmc.png"
                alt="समुदाय कार्यक्रम"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div
              style={{
                maxWidth: '760px',
                backgroundColor: 'rgba(255,255,255,0.85)',
                borderRadius: '0.9rem',
                padding: '1.25rem 1.5rem',
                backdropFilter: 'blur(2px)',
                boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#c2410c',
                  fontWeight: 700,
                }}
              >
                स्वागत
              </p>
              <h1 style={{ margin: '0.4rem 0 0.5rem', color: '#0f172a' }}>भाजप सोशल हब</h1>
              <p style={{ margin: '0 0 0.75rem', color: '#475569', maxWidth: '640px' }}>
                समर्थकांसाठी अद्यतने, कार्यक्रम आणि मीडिया क्षण शेअर करण्याचे व्यासपीठ.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, #f97316, #ea580c)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 700,
                    boxShadow: '0 10px 18px rgba(234,88,12,0.25)',
                  }}
                >
                  भेट ठरवा
                </a>
                <a
                  href="#media"
                  style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: '999px',
                    border: '2px solid #f97316',
                    color: '#c2410c',
                    textDecoration: 'none',
                    fontWeight: 700,
                    backgroundColor: '#fff7ed',
                  }}
                >
                  आमचे काम पहा
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          maxWidth: '1100px',
        }}
      >
        <div
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '2px solid #f97316',
            boxShadow: '0 14px 28px rgba(0,0,0,0.12)',
            minHeight: '320px',
            backgroundColor: '#fff',
            display: 'grid',
            gridTemplateColumns: 'minmax(260px, 1.1fr) minmax(260px, 1fr)',
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={poster.src}
              alt={poster.line}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transform: 'scale(1.02)',
                transition: 'transform 6s ease-in-out',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0.75rem',
                right: '0.75rem',
                backgroundColor: 'rgba(0,0,0,0.55)',
                color: '#fff',
                padding: '0.4rem 0.8rem',
                borderRadius: '0.75rem',
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              पोस्टर दृश्य
            </div>
          </div>
          <div
            style={{
              padding: '1.25rem 1.4rem',
              display: 'grid',
              gap: '0.6rem',
              alignContent: 'center',
              background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
            }}
          >
            <p
              style={{
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#c2410c',
                fontWeight: 800,
              }}
            >
              सदैव मदत
            </p>
            <h2 style={{ margin: 0, color: '#9a3412' }}>आपल्या सेवेसाठी आम्ही आहोत</h2>
            <p style={{ margin: 0, color: '#1f2937', lineHeight: 1.6 }}>{poster.line}</p>
            <p style={{ margin: 0, color: '#475569', lineHeight: 1.5 }}>
              विविध कार्यक्रम, स्नेहभेटी आणि संवाद क्षण आपोआप बदलणाऱ्या पोस्टर स्वरूपात पहा—तुमच्या जवळची मदत, सतत
              उपलब्ध.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          marginTop: '-0.5rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.1rem',
          }}
        >
          {[
            { src: '/photos/img1.jpeg', alt: 'समुदाय उपक्रम' },
            { src: '/photos/img1.jpeg', alt: 'कार्यक्रमाचे क्षण' },
          ].map((item) => (
            <div
              key={item.src}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
                border: '2px solid #f97316',
                minHeight: '260px',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          maxWidth: '1100px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {infoBlocks.map((block) => (
            <div
              key={block.title}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                padding: '1rem',
                border: '2px solid #f97316',
                boxShadow: '0 10px 22px rgba(0,0,0,0.1)',
                display: 'grid',
                gap: '0.4rem',
              }}
            >
              <h3 style={{ margin: 0, color: '#c2410c' }}>{block.title}</h3>
              <p style={{ margin: 0, color: '#1f2937', lineHeight: 1.5 }}>{block.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          maxWidth: '1100px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(260px, 1fr) minmax(260px, 1.2fr)',
            gap: '1rem',
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            border: '2px solid #f97316',
            boxShadow: '0 12px 26px rgba(0,0,0,0.12)',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={specialEvent.image}
              alt={specialEvent.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0.8rem',
                left: '0.8rem',
                backgroundColor: 'rgba(0,0,0,0.75)',
                color: '#fff',
                padding: '0.6rem 0.9rem',
                borderRadius: '0.9rem',
                fontWeight: 800,
                letterSpacing: '0.4px',
              }}
            >
              {specialEvent.date}
            </div>
          </div>
          <div
            style={{
              padding: '1.2rem 1.4rem',
              display: 'grid',
              gap: '0.5rem',
              alignContent: 'center',
              background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
            }}
          >
            <p
              style={{
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#c2410c',
                fontWeight: 800,
              }}
            >
              {specialEvent.title}
            </p>
            <h2 style={{ margin: 0, color: '#9a3412' }}>{specialEvent.subtitle}</h2>
            <p style={{ margin: 0, color: '#1f2937', lineHeight: 1.6 }}>{specialEvent.description}</p>
            <div style={{ color: '#0f172a', fontWeight: 700 }}>
              {specialEvent.time} • {specialEvent.place}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          maxWidth: '1200px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#c2410c',
              fontWeight: 800,
              fontSize: '0.95rem',
            }}
          >
            आठवणींचा कोलाज
          </p>
          <h2 style={{ margin: '0.35rem 0 1rem', color: '#0f172a' }}>आपल्या क्षणांचे पोस्टर</h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.1rem',
          }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.src}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
                backgroundColor: '#fff',
                border: '2px solid #f97316',
                minHeight: '260px',
              }}
            >
              <img
                src={item.src}
                alt={item.caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.55rem',
                  left: '0.55rem',
                  right: '0.55rem',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  padding: '0.45rem 0.65rem',
                  borderRadius: '0.8rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textAlign: 'center',
                  letterSpacing: '0.4px',
                }}
              >
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="share" style={sectionStyle}>
        <CreatePost />
      </section>

      <section id="events" style={sectionStyle}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <h2 style={{ margin: '0 0 0.25rem 0' }}>आगामी कार्यक्रम</h2>
            <p style={{ margin: 0, color: '#475569' }}>पुढील उपक्रमांची माहिती मिळवत रहा.</p>
          </div>
          <div
            style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section id="media" style={sectionStyle}>
        <MediaGallery items={mediaItems} />
      </section>

      <section id="posts" style={sectionStyle}>
        <div>
          <h2 style={{ margin: '0 0 0.25rem 0' }}>समुदाय फीड</h2>
          <p style={{ margin: 0, color: '#475569' }}>नवीन अद्यतने आणि पोस्ट्स.</p>
        </div>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      <section id="about" style={sectionStyle}>
        <div
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: '0.75rem',
            padding: '1.25rem',
            boxShadow: '0 10px 26px rgba(0,0,0,0.06)',
          }}
        >
          <h2 style={{ margin: '0 0 0.5rem 0' }}>या हबबद्दल</h2>
          <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>
            हे प्रारंभिक इंटरफेस आपल्या गरजेनुसार सानुकूलित करा. आपले ब्रँडिंग, डेटा स्रोत आणि संवाद जोडून पूर्ण
            सोशल उपस्थिती तयार करा.
          </p>
        </div>
      </section>

      <section id="contact" style={sectionStyle}>
        <div
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: '0.75rem',
            padding: '1.25rem',
            boxShadow: '0 10px 26px rgba(0,0,0,0.06)',
          }}
        >
          <h2 style={{ margin: '0 0 0.5rem 0' }}>संपर्क</h2>
          <p style={{ margin: '0 0 0.3rem 0', color: '#0f172a' }}>ईमेल: contact@example.com</p>
          <p style={{ margin: 0, color: '#475569' }}>फोन: +91-00000-00000</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
