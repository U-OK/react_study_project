const { useEffect, useState } = require("react");

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const getPosition = ({ latitude, longitude }) => {
    setPosition({ latitude, longitude });
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Геолокация недоступна");
      return;
    }

    geo.getCurrentPosition((position) => getPosition(position.coords));
  }, []);

  return { ...position, error };
};

export default usePosition;
