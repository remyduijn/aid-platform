import { Button } from 'bootstrap';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import data from "../data/Requests.json"
const Requests = () => {
  const [RequesterData, setRequestersData] = useState(data.data)
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>TYPE</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {RequesterData.map((currRequesterData) => {
            return (
              <>
                <tr>
                  <td>{currRequesterData.properties.ID}</td>
                  <td>{currRequesterData.properties.FIRST_NAME}</td>
                  <td>{currRequesterData.properties.LAST_NAME}</td>
                  <td>{currRequesterData.properties.TYPE}</td>
                  {currRequesterData.properties.STATUS === "Unfulfilled" ?
                  <tb className="d-flex align-content-center"><button className='btn btn-danger btn-sm'>Not fulfill</button></tb> : null}
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}
export default Requests