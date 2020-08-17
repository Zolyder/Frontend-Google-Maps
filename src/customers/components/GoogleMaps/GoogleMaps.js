import React from "react";
import GoogleMap from "google-map-react";
import LocationPin from "./LocationPin";
import "./maps.css";

const GoogleMaps = ({ location, zoomLevel, address }) => {
  const { lat, lng } = location;

  return (
    <div className="map mb-3">
      <h2 className="map-h2">Geolocation</h2>

      <div className="google-map">
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_GOOGLE }}
          center={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin lat={lat} lng={lng} text={address} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMaps;
