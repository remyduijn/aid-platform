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
import Navigation from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import { fetchCurrentVolunteerData } from "../features/chatsApiSlice";
import { loggedInUserData, setLoggedInUser } from "../features/userSlice";

function Map() {
  const [selectedTask, setselectedTask] = useState(null);
  const [allVolunteersData, setAllVolunteersData] = useState([])
  const allVolunteers = useSelector(allVolunteerData)
<<<<<<< HEAD
  console.log(allVolunteers, "allVolunteers")
  const [defaultCenter, setDefaultCenter] = useState({ lat: -27.59167956718997, lng: -48.53070394983697 })
=======
  const [defaultCenter, setDefaultCenter] = useState({lat: -27.59167956718997, lng: -48.53070394983697})
>>>>>>> 546499d64685b92e9f3e3af6cd7950094bdc1a4f
  const loggedInUser = useSelector(loggedInUserData)

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
<<<<<<< HEAD
    console.log(allVolunteers, ".................allVolunteers")
=======
>>>>>>> 546499d64685b92e9f3e3af6cd7950094bdc1a4f
    if (allVolunteers) {
      setAllVolunteersData(allVolunteers)
      allVolunteers?.map(item => {
        defaultLat = defaultLat + parseFloat(item.lat)
        defaultLng = defaultLng + parseFloat(item.lng)
      })

      setDefaultCenter({
        lat: parseFloat(defaultLat / allVolunteers?.length),
        lng: parseFloat(defaultLng / allVolunteers?.length)
      })
<<<<<<< HEAD
      console.log(defaultCenter)
    }

  }, [allVolunteers])
  if (allVolunteersData) {
    console.log(allVolunteersData, "allVolunteersData")
  }
  const moveToChatArea = async (selectedTask1) => {
    console.log("selectedTask", selectedTask1)
    const requesterId = selectedTask1?.user?.id
    const communityRequestId = selectedTask1?.id
    const chatId = await dispatch(fetchCurrentVolunteerData({ requesterId, communityRequestId }))
    const path = `/chatrooms/${chatId.payload.id}`
    navigate(path)
  }
  return (
    <>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 31.45574, lng: 74.276607 }}
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
=======
}
  
  }, [allVolunteers])
if (allVolunteersData) {
}
const moveToChatArea = async (selectedTask1) => {
  const requesterId = selectedTask1?.user?.id
  const communityRequestId = selectedTask1?.id
  if(requesterId !== communityRequestId){
    const chatId = await dispatch(fetchCurrentVolunteerData({requesterId,communityRequestId}))
    
      const path = `/chatrooms/${chatId.payload.id}`
      navigate(path)
  }
}
return (
  <>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 31.45574, lng: 74.276607 }}
    // defaultOptions={{ styles: mapStyles }}
    >
      {allVolunteersData?.map((task) => (
        <>
          <Marker
            key={task.id}
            position={{
              lat: parseFloat(task?.lat),
              lng: parseFloat(task?.lng)
            }}
            onClick={() => {
              setselectedTask(task);
>>>>>>> 546499d64685b92e9f3e3af6cd7950094bdc1a4f
            }}
            position={{
              lat: parseFloat(selectedTask?.lat),
              lng: parseFloat(selectedTask?.lng)
            }}
          >
            <div className="info-wrapper">
              <a>
                Name: {selectedTask?.user?.name} <br />
                Type of request: {selectedTask?.request_type}<br />
                Description: {selectedTask?.description}<br />
                Status: {selectedTask?.status}<br />
                {(loggedInUser.id !== selectedTask?.user_id) ?
                  <button onClick={() => moveToChatArea(selectedTask)}>Volunteer</button> : null}
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
  const loggedInUser = useSelector(loggedInUserData)

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