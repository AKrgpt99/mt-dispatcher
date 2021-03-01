import { useMap } from "./useMap";

const loadMapScript = () => {
  const mapId = "214ae42d83eff2d9";
  const apiKey = "AIzaSyBagB2JpZIAoi7zDxgBm19Gd_PH2zMI1M8";
  const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&map_ids=${mapId}`;
  const scripts = document.getElementsByTagName("script");

  for (let i = 0; i < scripts.length; i++) {
    if (scripts.item(i).src.indexOf(mapUrl) === 0) {
      return scripts.item(i);
    }
  }

  const mapScript = document.createElement("script");
  mapScript.src = mapUrl;
  mapScript.async = true;
  mapScript.defer = true;
  document.body.appendChild(mapScript);

  return mapScript;
};

const loadMarkerClusteringScript = () => {
  const markerClusteringUrl =
    "https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js";
  const scripts = document.getElementsByTagName("script");

  for (let i = 0; i < scripts.length; i++) {
    if (scripts.item(i).src.indexOf(markerClusteringUrl) === 0) {
      return scripts.item(i);
    }
  }

  const markerClusteringScript = document.createElement("script");
  markerClusteringScript.src = markerClusteringUrl;
  markerClusteringScript.async = true;
  markerClusteringScript.defer = true;
  document.body.appendChild(markerClusteringScript);

  return markerClusteringScript;
};

export { loadMapScript, useMap, loadMarkerClusteringScript };
