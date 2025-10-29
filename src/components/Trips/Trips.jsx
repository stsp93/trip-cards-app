import "./Trips.scss";

import { useEffect, useState } from "react";
import { getTripsData, searchTripByTerm, sortTripsByRating, simulateLoadingDelay } from "../../services/dataService.js";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton.jsx";
import TripList from "./TripList/TripList.jsx";
import FilterControls from "./FilterControls/FilterControls.jsx";
import Button from "../shared/Button/Button.jsx";

const MAX_VISIBLE_TRIPS = 6;

const Trips = () => {
  const [allTrips, setAllTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
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
      if (allTrips.length === 0) return;
      
      setLoadingFilter(true);
      
      await simulateLoadingDelay();
      
      let processed = searchTripByTerm(allTrips, searchTerm);
      
      if (sortBy) {
        processed = sortTripsByRating(processed, sortBy);
      }
      
      setFilteredTrips(processed);
      setVisibleCount(MAX_VISIBLE_TRIPS);
      setLoadingFilter(false);
    })();
  }, [allTrips, searchTerm, sortBy]);

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
      <FilterControls
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        sortBy={sortBy}
        onSortChange={setSortBy}
        isLoading={loadingFilter}
      />
      
      {loadingFilter ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <TripList trips={visibleTrips} searchTerm={searchTerm} />
          {hasMoreTrips && (
            <ShowMoreButton
              onClick={showMoreTrips}
              loading={loadingMore}
              remainingCount={filteredTrips.length - visibleCount}
            />
          )}
          {!filteredTrips.length && (
            <p className="no-trips-message">No trips found. 😕</p>
          )}
        </>
      )}
    </article>
  );
};

export default Trips;
