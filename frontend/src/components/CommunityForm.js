import { useEffect, useState } from "react"
import Navigation from "./Navbar";
import { useDispatch , useSelector} from 'react-redux';
import { CommunityFormApiData } from "../features/communityFormApiSlice"
// import { setCurrentLocationCooardinates } from "../features/getCurrentLocationSlice";
// import { cooardinatesData } from "../features/getCurrentLocationSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CommunityForm = () => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("")
  const [cooardinate, setCooardinates] = useState([])
  // const locationCooardinates = useSelector(cooardinatesData)

  const dispatch = useDispatch()
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCooardinates({
          "latitude": position.coords.latitude,
          "longitude": position.coords.longitude
        })
        // setCurrentLocationCooardinates({
        //   "latitude": position.coords.latitude,
        //   "longitude": position.coords.longitude
        // })
      });
    }
  }, [])

  const onSubmitForm = (e) => {
    e.preventDefault()
    const communityRequest = {
      request_type: type,
      description: description,
      lat: cooardinate?.latitude,
      lng: cooardinate?.longitude
    }
    console.log(cooardinate?.latitude)
    if(communityRequest.lat && communityRequest.lng){
      console.log("Submited Successfully")
      dispatch(CommunityFormApiData(communityRequest))
    }
    else{
      toast('You need to allow the location permission in order to see the requests around your current location')
    }
    setType('')
    setDescription('')
  }

  return (
    <>
      <Navigation />
      <ToastContainer />
      <div className="d-flex justify-content-center mt-2">
        <div className="col-6">
          <h1 className="my-4 text-center">Community Help</h1>
          <form onSubmit={(e) => onSubmitForm(e)}>
            <div className="mb-2">
              <label>Type</label>
              <select className="form-select"
                aria-label="Default select example"
                value={type}
                onChange={e => setType(e.target.value)}>
                <option selected>Select Type</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <textarea className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={description}
                onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <input type="submit" value="Submit" className="mt-3 btn btn-primary"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommunityForm;