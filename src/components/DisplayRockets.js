import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rockets from './Rockets';

function DisplayRockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      <h1>Rockets</h1>
      <Rockets rockets={rockets.lists} />
    </div>
  );
}

export default DisplayRockets;
