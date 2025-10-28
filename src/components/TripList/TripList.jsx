import "./TripList.scss";

import TripCard from "./TripCard/TripCard";
import { useEffect, useState } from "react";
import { getTripsData } from "../../services/dataService.js";

const TripList = () => {

    const [trips, setTrips] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await getTripsData();
            setTrips(data);
        })();
    }, []);

  return (
    <ul className="trip-list">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </ul>
  );
};

export default TripList;
