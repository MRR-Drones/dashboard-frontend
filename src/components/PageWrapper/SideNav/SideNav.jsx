import React from 'react';
import './SideNav.scss';
// import { useLocation, useNavigate } from 'react-router-dom';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartTreeMap, faCog, faMap } from '@fortawesome/pro-regular-svg-icons';
import {
  faStar,
  faChartTreeMap as faChartTreeMapSolid,
  faMap as faMapSolid,
  faCog as faCogSolid,
} from '@fortawesome/pro-solid-svg-icons';

// Import components
import NavItem from './NavItem/NavItem';
import Clock from './Clock/Clock';
import NotificationsBell from './NotificationsBell/NotificationsBell';
import Weather from './Weather/Weather';

export default function SideNav({ path }) {
  // const location = useLocation();
  // const pathName = location.pathname;
  // const navigate = useNavigate();

  return (
    <div className="SideNav">
      <div
        className="top"
        // onClick={() => {
        //   navigate('/');
        // }}
        // role="button"
        // tabIndex={0}
        // aria-hidden="true"
      >
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="middle">
        <NavItem link="/" path={path}>
          {path === '/' ? <FontAwesomeIcon icon={faChartTreeMapSolid} /> : <FontAwesomeIcon icon={faChartTreeMap} />}
        </NavItem>
        <NavItem link="/overview" path={path}>
          {path === '/overview' ? <FontAwesomeIcon icon={faMapSolid} /> : <FontAwesomeIcon icon={faMap} />}
        </NavItem>
        <NavItem link="/settings" path={path}>
          {path === '/settings' ? <FontAwesomeIcon icon={faCogSolid} /> : <FontAwesomeIcon icon={faCog} />}
        </NavItem>
      </div>
      <div className="bottom">
        <Weather />
        <Clock />
        <NotificationsBell />
      </div>
    </div>
  );
}
