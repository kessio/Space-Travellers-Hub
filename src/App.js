<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayRockets from './components/DisplayRockets';
=======
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import store from './redux/configureStore';
import { fetchMisions } from './redux/missions/missionsSlice';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchMisions());
  }, []);
>>>>>>> 4685b3fa623a78471ce5e084e33ea8b5a7347b90

  return (
<<<<<<< HEAD
    <div className="App">
      <DisplayRockets />
=======
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/"  element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element= {<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
>>>>>>> 4685b3fa623a78471ce5e084e33ea8b5a7347b90
    </div>
  );
};

export default App;

