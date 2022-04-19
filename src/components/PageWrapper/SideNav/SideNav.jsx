import React from 'react';
import './SideNav.scss';
import { useLocation, useNavigate } from 'react-router-dom';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartTreeMap, faCog, faMap } from '@fortawesome/pro-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Import components
import NavItem from './NavItem/NavItem';
import Clock from './Clock/Clock';
import NotificationsBell from './NotificationsBell/NotificationsBell';
import Wheater from './Wheater/Wheater';

export default function SideNav() {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();

  return (
    <div className="SideNav">
      <div
        onClick={() => {
          navigate('/');
        }}
        className="top"
        role="button"
        tabIndex={0}
        aria-hidden="true"
      >
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="middle">
        <NavItem link="/" pathName={pathName}>
          <FontAwesomeIcon icon={faChartTreeMap} />
        </NavItem>
        <NavItem link="/overview" pathName={pathName}>
          <FontAwesomeIcon icon={faMap} />
        </NavItem>
        <NavItem link="/settings" pathName={pathName}>
          <FontAwesomeIcon icon={faCog} />
        </NavItem>
      </div>
      <div className="bottom">
        <Wheater />
        <Clock />
        <NotificationsBell />
      </div>
    </div>
  );
}
