import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import RemoveReservedMissions from './RemoveReservedMissions';

const ListReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const { data } = missions;
  const reservedMissions = data.filter((missions) => missions.reserved);

  return (
    <div>
      { reservedMissions.length === 0 && <p>&emsp; Join A mission First</p>}
      <table>
        <tbody>
          {reservedMissions.map((mission) => (
            <RemoveReservedMissions
              key={uuidv4()}
              id={mission.mission_id}
              name={mission.mission_name}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListReservedMissions;
