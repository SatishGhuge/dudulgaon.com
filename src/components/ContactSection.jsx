import { useLanguage } from '../context/LanguageContext';
import candidateData from '../data/candidateData.json';
import './ContactSection.css';

const ContactSection = () => {
  const { t, language } = useLanguage();
  const contact = candidateData.contact;
  const lang = language;

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-icon">🏢</div>
            <h3 className="contact-label">{contact.office[lang]}</h3>
            <p className="contact-value">{contact.address[lang]}</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3 className="contact-label">{t('contact.helpline')}</h3>
            <p className="contact-value phone">{contact.mobile}</p>
            <p className="contact-note">{t('contact.availability')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


