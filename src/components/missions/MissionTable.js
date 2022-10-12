import { uuid as uuidv4} from "uuidv4";
import { useSelector } from 'react-redux';
import DisplayMissions from './DisplayMissions';

import React from 'react'

const MissionTable = () => {
  const missions = useSelector((state) => state.missions.data);

  return (
    <div>
      <table className="missions-table" >
        <tr className="col-header">
          <tr className="col-header">Mission</tr>
          <th>Description</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tbody>
          {
            missions.map((mission) => (
              <DisplayMissions
                key={uuidv4()}
                id={mission.mission_id}
                name={mission.misson_name}
                description={mission.description}
                isReserved={mission.reserved} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default MissionTable
