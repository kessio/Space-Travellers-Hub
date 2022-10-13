import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import DisplayMissions from './DisplayMissions';

const MissionTable = () => {
  const missions = useSelector((state) => state.missions.data);

  return (
    <div>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="fs-5">
            <th className="p-2">Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <DisplayMissions
              key={uuidv4()}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              isReserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionTable;
