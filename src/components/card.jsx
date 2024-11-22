const JournalCard = ({ image, description, duration }) => (
  <div className="journal-card">
    <img src={image} alt="Journal" className="card-image" />
    <div className="card-content">
      <p>{description}</p>
      <span>{duration}</span>
    </div>
  </div>
);

export default JournalCard;
