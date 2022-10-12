import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';

function DisplayRockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      <Rocket rockets={rockets.lists} />
    </div>
  );
}

export default DisplayRockets;
