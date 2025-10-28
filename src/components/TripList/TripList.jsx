import "./TripList.scss";

import TripCard from "./TripCard/TripCard";
import { useEffect, useState } from "react";
import { getTripsData } from "../../services/dataService.js";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton.jsx";

const TripList = () => {
    const [allTrips, setAllTrips] = useState([]);
    const [visibleCount, setVisibleCount] = useState(8);
    const [loadingMore, setLoadingMore] = useState(false);
    
    useEffect(() => {
        (async () => {
            const data = await getTripsData();
            setAllTrips(data);
        })();
    }, []);

    const showMoreTrips = async () => {
        setLoadingMore(true);
        
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 8000));
        
        setVisibleCount(prev => prev + 8);
        setLoadingMore(false);
    };

    const visibleTrips = allTrips.slice(0, visibleCount);
    const hasMoreTrips = visibleCount < allTrips.length;

  return (
    <article className="trips">
      <ul className="trip-list">
        {visibleTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </ul>
      
      {hasMoreTrips && (
        <ShowMoreButton 
          onClick={showMoreTrips} 
          loading={loadingMore}
        />
      )}
    </article>
    
  );
};

export default TripList;
