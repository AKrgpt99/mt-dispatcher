export function initMap(mapRef, options, markers) {
  const map = new window.google.maps.Map(mapRef.current, options);

  markers.map((marker) => {
    new window.google.maps.Marker({
      position: { lat: marker.lat, lng: marker.lng },
      map: map,
    });
  });

  return map;
}
