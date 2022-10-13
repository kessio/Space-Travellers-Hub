import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListReservedMissions from './missions/ListReservedMissions';

function MyProfile() {
  return (
    <div className="profilesCont">
      <div className="missionsCont">
        <h3 className="heading">My Missions</h3>
        <ListReservedMissions />
      </div>
      <div className="rocketsCont">
        <h3 className="heading">My Rockets</h3>
        <Card style={{ width: '40rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default MyProfile;
