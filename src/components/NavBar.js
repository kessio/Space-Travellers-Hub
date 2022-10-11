import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import Logo from '../assets/planet_logo.png';
import NavBarStyles from './NavBarStyles.module.css'

const NavBar = () => {
  const location = useLocation();
  const rocketLinkStyles = (pathname) => {
    if (pathname === '/rockets' || pathname === '/' || pathname === '') {
        return `${NavBarStyles.linkStyles} ${NavBarStyles.active}`;
    }
    return `${NavBarStyles.linkStyles}`;
  };

  const missionLinkStyles = (pathname) => {
    if (pathname === '/mission') {
        return `${NavBarStyles.linkStyles} ${NavBarStyles.navLinkBorder} ${NavBarStyles.active}`;
    }
    return `${NavBarStyles.linkStyles} ${NavBarStyles.navLinkBorder}`;
  };

  const profileLinkStyles = (pathname) => {
    if (pathname === 'myProfile') {
        return `${NavBarStyles.linkStyles} ${NavBarStyles.navLinkBorder} ${NavBarStyles.active}`;
    }
    return `${NavBarStyles.linkStyles} ${NavBarStyles.navLinkBorder}`;    
  }

  return (
    <nav className={NavBarStyles.navbar} >
        <div className={NavBarStyles.logoHolder} >
          <img src={Logo} alt="Picture of a planet" className={NavBarStyles.logo} />
            <h1>Space Travellers HUB</h1>
        </div>
        <div className={NavBarStyles.linksHolder} >
            <NavLink key={uuidv4()} className={rocketLinkStyles(location.pathname)} to="/rockets" >
                Rockets
            </NavLink>
            <NavLink key={uuidv4()} className={missionLinkStyles(location.pathname)} to="/missions" >
                Missions
            </NavLink>
            <NavLink key={uuidv4()} className={profileLinkStyles(location.pathname)} to="/myProfile" >
                My Profile
            </NavLink>
        </div>
    </nav>
  );
};

export default NavBar;

