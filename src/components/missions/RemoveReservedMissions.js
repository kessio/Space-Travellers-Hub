import React from 'react';
import { PropTypes } from 'prop-types';
import store from '../../redux/configureStore';
import { removeMission } from '../../redux/missions/missionsSlice';

const RemoveReservedMissions = ({ id, name }) => (
  <tr>
    <td>
      {name}
    </td>
    <td>
      <button type="button" onClick={() => store.dispatch(removeMission(id))}>
        Leave Mission
      </button>
    </td>
  </tr>
);

RemoveReservedMissions.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RemoveReservedMissions;
