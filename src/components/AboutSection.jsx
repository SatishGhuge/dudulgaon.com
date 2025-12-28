import { useLanguage } from '../context/LanguageContext';
import candidateData from '../data/candidateData.json';
import './AboutSection.css';

const AboutSection = () => {
  const { t, language } = useLanguage();
  const candidate = candidateData.candidate;
  const lang = language;

  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-content">

          <div className="about-card-1">
            <h3 className="card-title">{t('about.leadershipTitle')}</h3>
            <p className="card-text">{t('about.leadershipInfo')}</p>
          </div>

          <div >
          </div>
          <br />
          <div className="about-card">
            <h3 className="card-title">{candidate.name[lang]}</h3>
            <ul className="qualifications-list">
              {candidate.qualifications[lang].map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
            <p className="card-text">{t('about.candidateInfo')}</p>
          </div>

          <div className="about-card">
            <h3 className="card-title">{candidate.spouse.name[lang]}</h3>
            <ul className="roles-list">
              {candidate.spouse.roles[lang].map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
            <p className="card-text">{t('about.spouseInfo')}</p>
          </div>

          <div className="about-card">
            <h3 className="card-title">{t('about.fatherInfo')}</h3>
            <p className="card-text">{t('about.familyInfo')}</p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;


