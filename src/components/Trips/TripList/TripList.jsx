import "./TripList.scss";

import TripCard from "../TripCard/TripCard.jsx";

const TripList = ({ trips = [], searchTerm }) => {

  return (
      <ul className="trip-list">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} searchTerm={searchTerm} />
        ))}
      </ul>
  );
};

export default TripList;
