import { useEffect, useState } from "react"
import Navigation from "./Navbar";
import { useDispatch } from 'react-redux';
import { Fetchdata } from "../features/getLocationApiSlice";
import { CommunityFormApiData } from "../features/communityFormApiSlice"

const CommunityForm = () => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("")

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(Fetchdata())
  },[])

  const onSubmitForm = (e) => {
    e.preventDefault()
    debugger
    const communityRequest = {
      request_type: type,
      description: description,
      lat: "20.30",
      lng: "1.7990"
    }
    dispatch(CommunityFormApiData(communityRequest))
    setType('')
    setDescription('')
  }
  
  return (
    <>
      <Navigation />
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
              <label>Discription</label>
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