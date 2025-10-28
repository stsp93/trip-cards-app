export const getTripsData = async () => {
  try {
    const response = await import('../data/Data.json');
    return response.default.trips;
    
  } catch (error) {
    //handle gracefully
    console.error('Failed to load trip data');
    return [];
  }
};

export const filterTripsByName = (trips, searchTerm) => {
  if (!searchTerm) return trips;
  return trips.filter(trip => 
    trip.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const sortTripsByRating = (trips) => {
  return [...trips].sort((a, b) => b.rating - a.rating);
};

// Simulates a loading delay, set to 0 for no delay
export const simulateLoadingDelay = (ms = 500) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
