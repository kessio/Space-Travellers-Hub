import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';

const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" >
          <Rockets />
        </Route>
        <Route exact path="/Rockets" >
          <Rockets />
        </Route>
        <Route exact path="/missions" >
          <Missions />
        </Route>
        <Route exact path="/my-profile" >
          <Profile />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

