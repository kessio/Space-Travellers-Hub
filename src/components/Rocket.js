import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Rocket({ rockets }) {
  return (
    <div>
      {rockets.map((rocket) => (

        <Card className="rocket-card">
          <Card.Img style={{ width: '18rem' }} variant="card-img-top" src={rocket.flickr_images} />
          <Card.Body key={rocket.id}>
            <Card.Title>{rocket.rocket_name}</Card.Title>
            <Card.Text>
              {rocket.description}
            </Card.Text>
            <Button variant="primary">Reserve Rocket</Button>
          </Card.Body>
        </Card>

      ))}

    </div>
  );
}

Rocket.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      rocket_name: PropTypes.string,
    }),
  ).isRequired,
};

export default Rocket;
