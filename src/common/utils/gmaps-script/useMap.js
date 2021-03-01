import { forwardRef, useEffect, useState } from "react";

export const useMap = (position, markers) =>
  forwardRef((_, ref) => {
    const [map, setMap] = useState(null);
    const [mapMarkers, setMapMarkers] = useState(null);
    const options = {
      center: new window.google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      ),
      zoom: 15,
      disableDefaultUI: true,
      mapId: "214ae42d83eff2d9",
    };

    useEffect(() => {
      if (!map && ref.current) {
        setMap(new window.google.maps.Map(ref.current, options));

        if (markers.length !== 0) {
          setMapMarkers(
            markers.map((marker) => {
              new window.google.maps.Marker({
                position: { lat: marker.lat, lng: marker.lng },
                label: marker.label,
              });
            })
          );
        }

        new window.MarkerClusterer(map, mapMarkers, {
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });
      }
    }, [map]);

    return <div ref={ref} className="ak-map-container__map"></div>;
  });
