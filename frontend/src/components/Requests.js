import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { allRequestedRequests } from '../features/getRequestsApiSlice';
const Requests = ({requests}) => {
  const requestedData = useSelector(allRequestedRequests)
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
          {requests.map((currRequesterData , index) => {
            return (
              <>
                <tr>
                  <td>{index +1}</td>
                  <td>{currRequesterData?.request_type}</td>
                  <td>{currRequesterData?.description}</td>
                  {/* {currRequesterData?.status === "Unfulfilled" ?
                  <tb className="d-flex align-content-center"><button className='btn btn-danger btn-sm'>Not fulfill</button></tb> : null} */}
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