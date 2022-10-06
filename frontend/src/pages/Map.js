import React, { useState, useEffect } from "react";
import '../styles/location.css'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import riderData from '../data/riders-positions.json';
import mapStyles from '../mapStyles';


function Map() {
  const [selectedRider, setselectedRider] = useState(null);


  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setselectedRider(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 40.014984, lng: -105.270546 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {riderData.features.map((rider) => (
        <Marker
          key={rider.properties.ID}
          position={{
            lng: rider.geometry.coordinates[0],
            lat: rider.geometry.coordinates[1]
          }}
          onClick={() => {
            setselectedRider(rider);
          }}
          icon={{
            url: `/cycling.svg`,
            scaledSize: new window.google.maps.Size(35, 35)
          }}
          />
          ))}

      {selectedRider && (
        <InfoWindow
        onCloseClick={() => {
          setselectedRider(null);
        }}
        position={{
          lng: selectedRider.geometry.window_coordinates[0],
          lat: selectedRider.geometry.window_coordinates[1]
          }}
          >
          <div className="info-wrapper">
            <h3>{selectedRider.properties.NAME} {selectedRider.properties.LAST_NAME}</h3>
            <p>{selectedRider.properties.CITY}, {selectedRider.properties.STATE}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));


export default function Location() {

  const accessKey = process.env.REACT_APP_GOOGLE_KEY; 
  console.log(accessKey)

  return (
    <div className="map-position">
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${accessKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <h1>Map</h1>
    </div>
  );
}