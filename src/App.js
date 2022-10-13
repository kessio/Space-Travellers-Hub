import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import DisplayRockets from './components/DisplayRockets';
import NavBar from './components/NavBar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './components/MyProfile';
import store from './redux/configureStore';
import { fetchMisions } from './redux/missions/missionsSlice';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchMisions());
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
};

export default App;
