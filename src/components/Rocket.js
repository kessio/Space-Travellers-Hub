import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import store from '../redux/configureStore';
import { reserveRocket } from '../redux/rockets/rockets';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';

const Rocket = ({ rockets }) => {
  
  return (
    <div>
      {rockets.map((rocket) => (
        <Card key={rocket.id} className="rocket-card m-4">
          <Card.Img style={{ width: '20rem' }} variant="card-img-top" src={rocket.flickr_images[1]} />
          <Card.Body>
            <Card.Title>{rocket.rocket_name}</Card.Title>
            <Card.Text>
             {rocket.reserved === true ? <Badge bg="success" className="m-1">Reserved</Badge> : "" }{rocket.description}
            </Card.Text>
            <Button
              type="button"
              variant={ rocket.reserved === true ? "outline-secondary" : "primary"} 
              onClick={() => {
                store.dispatch(reserveRocket(rocket.id));
              }}
            >
               {rocket.reserved === true ? "Cancel Reservations" : "Reserve Rocket"}
            </Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  );
};

Rocket.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      rocket_name: PropTypes.string,
    }),
  ).isRequired,
};

export default Rocket;
