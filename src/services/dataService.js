export const getTripsData = async () => {
  try {
    const response = await import('../data/Data.json');
    return response.default.trips;
    
  } catch (error) {
    //handle gracefully
    console.error('Failed to load trip data');
  }
};

