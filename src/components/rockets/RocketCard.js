/* eslint-disable camelcase */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import store from '../../redux/configureStore';
import { reserveRocket } from '../../redux/rockets/rockets';
import '../../App.css';

const RocketCard = ({
  id, flickr_image, rocket_name, reserved, description,
}) => (
  <Card key={id} className="rocket-card m-4">
    <Card.Img style={{ width: '20rem' }} variant="card-img-top" src={flickr_image} />
    <Card.Body>
      <Card.Title>{rocket_name}</Card.Title>
      <Card.Text>
        { reserved === true ? <Badge bg="success" className="m-1">Reserved</Badge> : '' }
        {description}
      </Card.Text>
      <Button
        type="button"
        variant={reserved === true ? 'outline-secondary' : 'primary'}
        onClick={() => {
          store.dispatch(reserveRocket(id));
        }}
      >
        {reserved === true ? 'Cancel Reservations' : 'Reserve Rocket'}
      </Button>
    </Card.Body>
  </Card>
);

RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  flickr_image: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,

};

export default RocketCard;
