import React from 'react';

const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #fff7ed, #f8fafc)',
  padding: '1.5rem',
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  color: '#0f172a',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gap: '1.5rem',
};

const heroStyle = {
  background: 'linear-gradient(135deg, rgba(255,186,122,0.92), rgba(255,237,213,0.95))',
  borderRadius: '1rem',
  padding: '1.6rem',
  border: '1px solid #fdba74',
  boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
  display: 'grid',
  gap: '0.5rem',
};

const sectionTitle = {
  margin: '0 0 0.35rem 0',
  fontSize: '1.35rem',
  fontWeight: 800,
  color: '#b45309',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1rem',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '0.85rem',
  padding: '1rem',
  border: '1px solid #e2e8f0',
  boxShadow: '0 10px 22px rgba(0,0,0,0.08)',
  display: 'grid',
  gap: '0.35rem',
};

const chipStyle = {
  display: 'inline-block',
  padding: '0.25rem 0.65rem',
  borderRadius: '999px',
  backgroundColor: '#fef3c7',
  color: '#b45309',
  fontWeight: 700,
  fontSize: '0.85rem',
};

const weeklyEvents = [
  {
    title: 'संपर्क व संवाद बैठक',
    day: 'प्रत्येक बुधवार - सायं ७:३०',
    place: 'सावित्रीबाई फुले सभागृह, तळेगाव',
    note: 'स्थानिक प्रश्न, कामकाज अद्यतने आणि मतदार सूचनांचा आढावा.',
  },
  {
    title: 'साप्ताहिक जनसंपर्क शिबिर',
    day: 'प्रत्येक शनिवार - सायं ५:००',
    place: 'डुडुळगाव चौक',
    note: 'रोजगार, आरोग्य आणि महिला स्वयं-सहायता गटांसाठी मदत केंद्र.',
  },
];

const monthlyEvents = [
  {
    title: 'मकर संक्रांत तिळगुळ सोहळा',
    date: '१४ जानेवारी २०२६',
    place: 'भाजप कार्यालय, मोशी',
    note: 'तिळगुळ घ्या-गोड गोड बोला, सन्मान सत्कार आणि सांस्कृतिक कार्यक्रम.',
  },
  {
    title: 'गुढी पाडवा स्वागत शोभायात्रा',
    date: '१० मार्च २०२६',
    place: 'गंधर्वनगरी ते चचोली',
    note: 'दिंडी, लेझीम पथक आणि पारंपरिक वेशभूषेत कुटुंबीयांसह सहभाग.',
  },
  {
    title: 'श्री छत्रपती शिवाजी महाराज जयंती',
    date: '१९ फेब्रुवारी २०२६',
    place: 'शिवस्मारक, तळेगाव पार्क',
    note: 'रांगोळी स्पर्धा, इतिहास कथन, प्रेरणादायी व्याख्यान आणि पुष्पांजली.',
  },
  {
    title: 'महास्वच्छता मोहीम',
    date: 'प्रत्येक महिन्याचा पहिला रविवार',
    place: 'इंद्रायणी नदी परिसर',
    note: 'झाडे लावणे, प्लास्टिक निर्मूलन आणि जनजागृती मोहीम.',
  },
];

const utsavEvents = [
  {
    title: 'अंगणातील गणेशोत्सव विशेष भेट',
    date: 'ऑगस्ट २०२६',
    place: 'मोशी-डुडुळगाव परिसरातील मंडळे',
    note: 'स्थानिक मंडळांना स्नेहभेट, सामाजिक उपक्रमांची माहिती आणि सहभाग.',
  },
  {
    title: 'दसरा कौटुंबिक मेळावा',
    date: 'ऑक्टोबर २०२६',
    place: 'स्पोर्ट्स कॉम्प्लेक्स, चचोली',
    note: 'क्रीडा स्पर्धा, पारंपरिक खेळ, ज्येष्ठांचा सत्कार आणि फूड फेस्ट.',
  },
];

const Events = () => (
  <div style={pageStyle}>
    <div style={containerStyle}>
      <div style={heroStyle}>
        <div style={{ fontWeight: 800, fontSize: '1.8rem', color: '#9a3412' }}>
          आगामी कार्यक्रम व साप्ताहिक उपक्रम
        </div>
        <div style={{ color: '#4b5563', fontSize: '1rem', maxWidth: '880px' }}>
          महाराष्ट्रातील प्रमुख सण, सामाजिक उपक्रम आणि साप्ताहिक संपर्क यांची झलक येथे दिली आहे.
          आपल्या सहभागामुळे प्रत्येक कार्यक्रम अधिक अर्थपूर्ण होईल.
        </div>
      </div>

      <section>
        <div style={sectionTitle}>साप्ताहिक उपक्रम</div>
        <div style={gridStyle}>
          {weeklyEvents.map((event) => (
            <div key={event.title} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, color: '#b45309' }}>{event.title}</h3>
                <span style={chipStyle}>साप्ताहिक</span>
              </div>
              <div style={{ fontWeight: 600 }}>{event.day}</div>
              <div style={{ color: '#475569' }}>{event.place}</div>
              <p style={{ margin: '0.35rem 0 0', color: '#334155', lineHeight: 1.5 }}>{event.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div style={sectionTitle}>मासिक व सणांचे कार्यक्रम</div>
        <div style={gridStyle}>
          {monthlyEvents.map((event) => (
            <div key={event.title} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, color: '#b45309' }}>{event.title}</h3>
                <span style={{ ...chipStyle, backgroundColor: '#dbeafe', color: '#1d4ed8' }}>मासिक</span>
              </div>
              <div style={{ fontWeight: 600 }}>{event.date}</div>
              <div style={{ color: '#475569' }}>{event.place}</div>
              <p style={{ margin: '0.35rem 0 0', color: '#334155', lineHeight: 1.5 }}>{event.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div style={sectionTitle}>विशेष उत्सव</div>
        <div style={gridStyle}>
          {utsavEvents.map((event) => (
            <div key={event.title} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, color: '#b45309' }}>{event.title}</h3>
                <span style={{ ...chipStyle, backgroundColor: '#dcfce7', color: '#15803d' }}>विशेष</span>
              </div>
              <div style={{ fontWeight: 600 }}>{event.date}</div>
              <div style={{ color: '#475569' }}>{event.place}</div>
              <p style={{ margin: '0.35rem 0 0', color: '#334155', lineHeight: 1.5 }}>{event.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Events;

