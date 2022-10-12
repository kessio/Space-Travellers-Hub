import React from 'react';
import PropTypes from 'prop-types'

function Rockets({ rockets }) {
  return (
    <div>
      {rockets.map((rocket) => (
        <p key={rocket.id}>{rocket.rocket_name}</p>
         
      ))}

    </div>
  );
}

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      rocket_name: PropTypes.string
    }),
  ).isRequired,
};

export default Rockets;
