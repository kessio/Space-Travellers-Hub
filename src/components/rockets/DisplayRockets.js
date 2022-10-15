import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';
import store from '../../redux/configureStore';

function DisplayRockets() {
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    store.dispatch(fetchRockets());
  }, []);
  return (
    <div>
      <Rocket rockets={rockets.lists} />
    </div>
  );
}

export default DisplayRockets;
