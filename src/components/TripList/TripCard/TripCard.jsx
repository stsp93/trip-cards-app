import "./TripCard.scss";

const TripCard = (props) => {
  return (
    <li className="trip-card">
        <img className="trip-card__image" src={props.trip.image} alt={props.trip.name} />
        <h2 className="trip-card__title">{props.trip.name}</h2>
    </li>
  );
};

export default TripCard;
