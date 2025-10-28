import "./Trips.scss";

import { useEffect, useState } from "react";
import { getTripsData } from "../../services/dataService.js";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton.jsx";
import TripList from "./TripList/TripList.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";

const Trips = () => {
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
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setVisibleCount(prev => prev + 8);
        setLoadingMore(false);
    };

    const visibleTrips = allTrips.slice(0, visibleCount);
    const hasMoreTrips = visibleCount < allTrips.length;
  return (
    <article className="trips">
      <TripList trips={visibleTrips} />
      {hasMoreTrips && (
        <ShowMoreButton 
          onClick={showMoreTrips} 
          loading={loadingMore}
          remainingCount={allTrips.length - visibleCount}
        />
      )}
    </article>
    
  );
};

export default Trips;
