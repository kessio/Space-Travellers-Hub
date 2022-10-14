import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListReservedMissions from './missions/ListReservedMissions';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const { lists } = rockets;
  const reservedRockets = lists.filter((myrockets) => myrockets.reserved);

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
            {reservedRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default MyProfile;
