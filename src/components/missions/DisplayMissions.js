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
      <td className="fs-5 fw-bold">
        {' '}
        {name}
        {' '}
      </td>
      <td className="p-2">
        {' '}
        {description}
        {' '}
      </td>
      {isReserved ? <td className="badge bg-primary text-light m-2 mt-5">Active Member</td> : <td className="badge bg-secondary text-light m-2 mt-5">NOT A MEMBER</td>}
      <td className="align-middle m-3">
        <button
          className={(isReserved) ? 'btn btn-outline-danger' : 'btn btn-outline-secondary'}
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
