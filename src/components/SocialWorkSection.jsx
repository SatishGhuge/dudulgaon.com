import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations.json';
import candidateData from '../data/candidateData.json';
import './SocialWorkSection.css';

const SocialWorkSection = () => {
  const { language } = useLanguage();
  const t = translations[language].socialWork;
  const socialWorkImages = candidateData.socialWorkImages || [];

  const getImageForActivity = (index) => {
    const imageData = socialWorkImages.find(img => img.activityIndex === index);
    return imageData || null;
  };

  return (
    <section className="social-work-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="activities-grid">
          {t.activities.map((activity, index) => {
            const imageData = getImageForActivity(index);
            return (
              <div key={index} className="activity-card">
                <div className="activity-header">
                  <div className="activity-icon">✓</div>
                  <p className="activity-text">{activity}</p>
                </div>
                {imageData && (
                  <div className="activity-image-wrapper">
                    <img 
                      src={imageData.image} 
                      alt={imageData.alt}
                      className="activity-image"
                      loading="lazy"
                      onError={(e) => {
                        // Hide image if it fails to load
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="festivals-section">
          <h3 className="festivals-title">{t.festivals[0]}</h3>
          <p className="festivals-text">{t.festivals[1]}</p>
        </div>
      </div>
    </section>
  );
};

export default SocialWorkSection;

