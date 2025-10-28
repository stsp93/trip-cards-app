import "./TripList.scss";

import TripCard from "../TripCard/TripCard.jsx";

const TripList = ({ trips = [] }) => {

  return (
      <ul className="trip-list">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </ul>
  );
};

export default TripList;
