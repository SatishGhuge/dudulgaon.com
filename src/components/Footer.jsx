import { useLanguage } from '../context/LanguageContext';
import partyData from '../data/partyData.json';
import './Footer.css';

const Footer = () => {
  const { t, language } = useLanguage();
  const partyName = partyData.partyName[language];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3 className="footer-party-name">{partyName}</h3>
          <p className="footer-disclaimer">{t('footer.disclaimer')}</p>
          <p className="footer-message">{t('footer.message')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


