import React from 'react';
import PropTypes from 'prop-types';
import RocketCard from './RocketCard';

const Rocket = ({ rockets }) => (
  <div>
    {rockets.map((rocket) => (
      <RocketCard key={rocket.id} id={rocket.id} flickr_image={rocket.flickr_images[1]} description={rocket.description} rocket_name={rocket.rocket_name} reserved={rocket.reserved}/>
    ))}

  </div>
);

Rocket.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      rocket_name: PropTypes.string,
    }),
  ).isRequired,
};

export default Rocket;
