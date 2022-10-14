import React from 'react';
import { PropTypes } from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const MissionsProfile = ({ name }) => (
  <ListGroup variant="flush">
    <ListGroup.Item>
      {' '}
      {name}
      {' '}
    </ListGroup.Item>
  </ListGroup>
);

MissionsProfile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MissionsProfile;
