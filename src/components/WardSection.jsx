import { useLanguage } from '../context/LanguageContext';
import candidateData from '../data/candidateData.json';
import './WardSection.css';

const WardSection = () => {
  const { t, language } = useLanguage();
  const ward = candidateData.ward;
  const lang = language;

  return (
    <section className="ward-section">
      <div className="container">
        <h2 className="section-title">{t('ward.title')}</h2>
        <div className="ward-content">
          <div className="ward-card">
            <div className="ward-icon">📍</div>
            <h3 className="ward-label">{t('ward.municipality')}</h3>
            {/* <p className="ward-value">{ward.municipality[lang]}</p> */}
          </div>

          <div className="ward-card">
            <div className="ward-icon">🏛️</div>
            <h3 className="ward-label">{t('ward.wardNumber')}</h3>
            {/* <p className="ward-value">{ward.number}</p> */}
          </div>

          <div className="ward-card">
            <div className="ward-icon">🏘️</div>
            {/* <h3 className="ward-label">{t('ward.areas')}</h3> */}
            <div className="areas-list">
              {ward.areas[lang].map((area, index) => (
                <span key={index} className="area-tag">{area}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="vision-banner">
          <p className="vision-text">{t('ward.vision')}</p>
        </div>
      </div>
    </section>
  );
};

export default WardSection;


