import React, { useState, useEffect } from "react";
import '../styles/location.css'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import { useDispatch, useSelector } from "react-redux";
import { getCommunityFormApiData, allVolunteerData } from "../features/communityFormApiSlice";
// import { currentLocationCooardinates } from "../features/getCurrentLocationSlice"

import Navigation from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
// import mapStyles from '../mapStyles';

function Map() {
  const [selectedTask, setselectedTask] = useState(null);
  const [allVolunteersData, setAllVolunteersData] = useState([])
  const allVolunteers = useSelector(allVolunteerData)
  const [defaultCenter, setDefaultCenter] = useState({lat: -27.59167956718997, lng: -48.53070394983697})
  // const locationCooardinates = useSelector(currentLocationCooardinates)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCommunityFormApiData())
  }, [])

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setselectedTask(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    let defaultLat = 0.0;
    let defaultLng = 0.0;
    if (allVolunteers.length !== 0) {
      setAllVolunteersData(allVolunteers?.requests)
      allVolunteers?.requests.map(item => {
        // defaultLat = defaultLat + item.lat
        defaultLat = defaultLat + parseFloat(item.lat)
        defaultLng = defaultLng + parseFloat(item.lng)
      })

      // console.log(defaultLat.length)
      setDefaultCenter({
        lat: parseFloat(defaultLat/allVolunteers.requests.length),
        lng: parseFloat(defaultLng/allVolunteers.requests.length)
      })
      console.log(defaultCenter)
}
  
  }, [allVolunteers])
if (allVolunteersData) {
  console.log(allVolunteersData, "allVolunteersData")
}

const moveToChatArea = () => {
  const path = '/chatroom'
  navigate(path)
}
// const setDefaultCenter = () => {
//   allVolunteers?.map(item => 
//     {defaultLat += item.lat;
//     defaultLng += item.lng;}

//     )
// }
return (
  <>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: -27.59167956718997, lng: -48.53070394983697 }} 
    // defaultOptions={{ styles: mapStyles }}
    >
      {allVolunteersData?.map((task) => (
        <>
          {console.log(parseFloat(task?.lat))}
          <Marker
            key={task.id}
            position={{
              lat: parseFloat(task?.lat),
              lng: parseFloat(task?.lng)
            }}
            onClick={() => {
              setselectedTask(task);
            }}
            icon={{
              url: `/pin.svg`,
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          />
        </>
      ))}
      {selectedTask && (
        <InfoWindow
          onCloseClick={() => {
            setselectedTask(null);
          }}
          position={{
            lat: parseFloat(selectedTask?.lat),
            lng: parseFloat(selectedTask?.lng)
          }}
        >
          <div className="info-wrapper">
            <a>
              Type of request: {selectedTask?.request_type}<br />
              Description: {selectedTask?.description}<br />
              Status: {selectedTask?.status}<br />
              <button onClick={() => moveToChatArea()}>Volunteer</button>
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  </>
);
}

const MapWrapped = withScriptjs(withGoogleMap(Map));


export default function Location() {

  const accessKey = process.env.REACT_APP_GOOGLE_KEY;
  console.log(accessKey)

  return (
    <>
      <Navigation />
      <div className="map-position">
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${accessKey}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
}