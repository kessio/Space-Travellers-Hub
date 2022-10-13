import React from 'react';
import Button from 'react-bootstrap/Button';
import ListReservedMissions from './missions/ListReservedMissions';

function MyProfile() {
  return (
    <div className="profile">
      <div>
        <h3>My Missions</h3>
        <ListReservedMissions />
      </div>
      <div>
        <h3>My Rockets</h3>
        <Button type="button" className="btn btn-primary">Login here</Button>
      </div>
    </div>
  );
}

export default MyProfile;
