import "./Trips.scss";

import { useEffect, useState } from "react";
import { getTripsData, filterTripsByName, simulateLoadingDelay } from "../../services/dataService.js";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton.jsx";
import TripList from "./TripList/TripList.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";

const MAX_VISIBLE_TRIPS = 6;

const Trips = () => {
  const [allTrips, setAllTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(MAX_VISIBLE_TRIPS);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingFilter, setLoadingFilter] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getTripsData();
      setAllTrips(data);
      setFilteredTrips(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      
      setLoadingFilter(true);
      
      await simulateLoadingDelay();
      
      const filtered = filterTripsByName(allTrips, searchTerm);
      setFilteredTrips(filtered);
      setVisibleCount(MAX_VISIBLE_TRIPS);
      setLoadingFilter(false);
    })();
  }, [allTrips, searchTerm]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const showMoreTrips = async () => {
    setLoadingMore(true);

    await simulateLoadingDelay();

    setVisibleCount((prev) => prev + MAX_VISIBLE_TRIPS);
    setLoadingMore(false);
  };

  const visibleTrips = filteredTrips.slice(0, visibleCount);
  const hasMoreTrips = visibleCount < filteredTrips.length;
  return (
    <article className="trips">
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        placeholder="Search trips by name..."
      />
      
      {loadingFilter ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <TripList trips={visibleTrips} />
          {hasMoreTrips && (
            <ShowMoreButton
              onClick={showMoreTrips}
              loading={loadingMore}
              remainingCount={filteredTrips.length - visibleCount}
            />
          )}
        </>
      )}
    </article>
  );
};

export default Trips;
