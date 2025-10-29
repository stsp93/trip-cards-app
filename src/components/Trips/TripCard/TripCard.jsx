import "./TripCard.scss";
import { useModal } from "../../ModalProvider/ModalProvider.jsx";

const TripCard = (props) => {
  const { openModal } = useModal();
  
  const rating = props.trip.rating;
  let stars = '';
  for (let i = 0; i < rating; i++) {
      stars+= '⭐ ';
    }

  const handleMoreInfo = () => {
    openModal(props.trip);
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <li className="trip-card">
      <div className="rating-wrapper">
        {stars}
      </div>
        <button className="trip-card__button" onClick={handleMoreInfo}>More Info</button>
        <img className="trip-card__image" src={props.trip.image} alt={props.trip.name} />
        <div className="trip-card__info">
        <h2 className="trip-card__title">{highlightText(props.trip.name, props.searchTerm)}</h2>
          <p className="trip-card__description">{highlightText(props.trip.description, props.searchTerm)}</p>
        </div>
    </li>
  );
};

export default TripCard;
