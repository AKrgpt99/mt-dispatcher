import { forwardRef, useEffect, useState } from "react";

import { initMap } from "./map";

export const useMap = (position, markers) =>
  forwardRef((_, ref) => {
    const [map, setMap] = useState(null);
    const options = {
      center: new window.google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      ),
      zoom: 11,
      disableDefaultUI: true,
      mapId: "214ae42d83eff2d9",
    };

    useEffect(() => {
      if (!map && ref.current && markers.length !== 0) {
        setMap(initMap(ref, options, markers));
      }
    }, [map]);

    return <div ref={ref} className="ak-map-container__map"></div>;
  });
