import { useLanguage } from '../context/LanguageContext';
import partyData from '../data/partyData.json';
import './PartyHeader.css';

const PartyHeader = () => {
  const { language } = useLanguage();
  const partyName = partyData.partyName[language];

  return (
    <section className="party-header">
      <div className="container">
        <h1 className="party-name">{partyName}</h1>
      </div>
    </section>
  );
};

export default PartyHeader;

