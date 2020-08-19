export const distanceTo = (lat1, lon1, lat2, lon2) => {
  const EARTH_RADIUS = 6371; // Radius of the earth in km
  const DELTA_LATITUDE = deg2rad(lat2 - lat1);
  const DELTA_LONGTITUDE = deg2rad(lon2 - lon1);
  const SPHERICAL_LAW_OF_COSINES =
    Math.sin(DELTA_LATITUDE / 2) * Math.sin(DELTA_LATITUDE / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(DELTA_LONGTITUDE / 2) *
      Math.sin(DELTA_LONGTITUDE / 2);
  const CENTRAL_SUBTENDED_ANGLE =
    2 *
    Math.atan2(
      Math.sqrt(SPHERICAL_LAW_OF_COSINES),
      Math.sqrt(1 - SPHERICAL_LAW_OF_COSINES)
    );
  const distance = EARTH_RADIUS * CENTRAL_SUBTENDED_ANGLE;
  return distance.toFixed(0);
};

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
