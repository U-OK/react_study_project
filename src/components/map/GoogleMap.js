import React, { useEffect, useRef, useState } from "react";

export default function Map({
  options = { center: { lat: 48, lng: 8 }, zoom: 5 },
  className,
}) {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, options));
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCRWoD9DpUcZ3P3zfO1Q_blrvQW7SW8GWU`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options]);

  return <div style={{ height: `100%` }} {...{ ref, className }} />;
}
