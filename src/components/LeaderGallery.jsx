import partyData from '../data/partyData.json';
import './LeaderGallery.css';

const LeaderGallery = () => {
  const leaders = partyData.leaders;

  return (
    <div className="leader-gallery">
      <div className="leaders-grid">
        {leaders.map((leader) => (
          <div key={leader.id} className="leader-card">
            <div className="leader-image-wrapper">
              <img 
                src={leader.image} 
                alt={leader.name}
                className="leader-image"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderGallery;


