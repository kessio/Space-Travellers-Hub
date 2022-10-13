import React from 'react';
import { PropTypes } from 'prop-types';
import store from '../../redux/configureStore';
import { removeMission } from '../../redux/missions/missionsSlice';

const DisplayMissions = (props) => {
  const {
    id, name, description, isReserved,
  } = props;

  return (
    <tr>
      <td>
        {' '}
        {name}
        {' '}
      </td>
      <td>
        {' '}
        {description}
        {' '}
      </td>
      {isReserved ? <td>MEMBER</td> : <td>NOT A MEMBER</td>}
      <td>
        <button
          className={(isReserved) ? 'red-btn-color' : 'btn-color-blue'}
          type="button"
          onClick={() => store.dispatch(removeMission(id))}
        >
          {(isReserved) ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

DisplayMissions.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

export default DisplayMissions;
