import { useLanguage } from '../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button 
        onClick={toggleLanguage}
        className={`lang-btn ${language === 'marathi' ? 'active' : ''}`}
        aria-label="Switch to Marathi"
      >
        मराठी
      </button>
      <span className="lang-separator">|</span>
      <button 
        onClick={toggleLanguage}
        className={`lang-btn ${language === 'english' ? 'active' : ''}`}
        aria-label="Switch to English"
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;


