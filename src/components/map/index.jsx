import React, { Component } from "react";

import "./map.css";

class Map extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      new window.google.maps.Map(document.getElementById("map"), {
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        zoom: 10,
        disableDefaultUI: true,
        mapId: "214ae42d83eff2d9",
      });
    });
  }

  render() {
    return <div id="map"></div>;
  }
}

export default Map;
