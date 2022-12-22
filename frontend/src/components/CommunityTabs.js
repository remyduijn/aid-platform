import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Requests from './Requests';

function CommunityTabs() {
  return (
    <>
      <div class="container mt-5 shadow p-3 bg-white rounded" >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className='text-dark'>Requester's Requests</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='text-dark'>Volunteer's Requests</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
             <Requests/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
             <Requests/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
      </div>
    </>
  );
}

export default CommunityTabs;