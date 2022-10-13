import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import MissionsProfile from './MissionsProfile';

const ListReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const { data } = missions;
  const reservedMissions = data.filter((missions) => missions.reserved);

  return (
    <div>
      { reservedMissions.length === 0 && <p className="firstJoin">&emsp; You Have Not Joined Any Mission</p>}
      <Card style={{ width: '40rem' }}>
        {reservedMissions.map((mission) => (
          <MissionsProfile
            key={uuidv4()}
            name={mission.mission_name}
          />
        ))}
      </Card>
    </div>
  );
};

export default ListReservedMissions;
