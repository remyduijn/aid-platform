import { useEffect, useState } from "react"
import Navigation from "./Navbar";
import useGeoLocation from "hooks/useGeoLocation";

const CommunityForm = () => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("")
  const location = useGeoLocation()

  useEffect(() => {
    console.log(JSON.stringify(location))
    console.log("render form", type , description)
  })
  
  return (
    <>
      <Navigation />
      <div className="d-flex justify-content-center mt-2">
        <div className="col-6">
          <h1 className="my-4 text-center">Community Help</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2">
              <label>Type</label>
              <select className="form-select"
                aria-label="Default select example"
                value={type}
                onChange={e => setType(e.target.value)}>
                <option selected>Select Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label for="exampleFormControlTextarea1">Discription</label>
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