import { useLanguage } from '../context/LanguageContext';
import candidateData from '../data/candidateData.json';
import './CandidateHero.css';

const CandidateHero = () => {
  const { t, language } = useLanguage();
  const candidate = candidateData.candidate;
  const lang = language;

  return (
    <section className="candidate-hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title">{t('candidateHero.title')}</h2>
          
          {/* Candidate Section */}
          <div className="candidate-profile">
            <div className="candidate-image-wrapper">
              <img 
                src={candidate.image} 
                alt={candidate.name[lang]}
                className="candidate-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="candidate-info">
              <h1 className="candidate-name">{candidate.name[lang]}</h1>
              <p className="candidate-designation">{candidate.designation[lang]}</p>
            </div>
          </div>

          {/* Spouse Section */}
          <div className="spouse-profile">
            <div className="spouse-image-wrapper">
              <img 
                src={candidate.spouse.image} 
                alt={candidate.spouse.name[lang]}
                className="spouse-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="spouse-info">
              <p className="spouse-name">{candidate.spouse.name[lang]}</p>
              <p className="spouse-designation">{candidate.spouse.designation[lang]}</p>
            </div>
          </div>

          <p className="mission-statement">{t('candidateHero.mission')}</p>
        </div>
      </div>
    </section>
  );
};

export default CandidateHero;

