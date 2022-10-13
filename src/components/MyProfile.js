import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MyProfile() {
  return (
    <div className="profile">
      <div>
        <h3>My Mission</h3>
      </div>
      <div>
        <h3>My Rockets</h3>
        <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
      </div>
    </div>
  );
}

export default MyProfile;
