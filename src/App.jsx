import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import PartyHeader from './components/PartyHeader';
import CandidateHero from './components/CandidateHero';
import AboutSection from './components/AboutSection';
import SocialWorkSection from './components/SocialWorkSection';
import WardSection from './components/WardSection';
import ContactSection from './components/ContactSection';
import QueryFormModal from './components/QueryFormModal';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import './App.css';

const QueryButton = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="query-button"
        onClick={() => setIsModalOpen(true)}
        aria-label="Submit Problem"
      >
        <span className="query-button-icon">📝</span>
        <span className="query-button-text">{t('queryForm.button')}</span>
      </button>
      <QueryFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

const AppContent = () => {
  return (
    <div className="app">
      <LanguageToggle />
      <QueryButton />
      
      <main className="main-content">
        <PartyHeader />
        <CandidateHero />
        <AboutSection />
        <SocialWorkSection />
        <WardSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;


