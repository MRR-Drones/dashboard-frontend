import React from 'react';
import './SideNav.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import NavItem from './NavItem/NavItem';
import Clock from './Clock/Clock';
import NotificationsBell from './NotificationsBell/NotificationsBell';
import Weather from './Weather/Weather';

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="top">
        <FontAwesomeIcon icon={solid('star')} />
      </div>
      <div className="middle">
        <NavItem link="/">
          {window.location.pathname === '/' ? (
            <FontAwesomeIcon icon={solid('chart-tree-map')} />
          ) : (
            <FontAwesomeIcon icon={regular('chart-tree-map')} />
          )}
        </NavItem>
        <NavItem link="/overview">
          {window.location.pathname === '/overview' ? (
            <FontAwesomeIcon icon={solid('map')} />
          ) : (
            <FontAwesomeIcon icon={regular('map')} />
          )}
        </NavItem>
        <NavItem link="/testpage">
          {window.location.pathname === '/testpage' ? (
            <FontAwesomeIcon icon={solid('cog')} />
          ) : (
            <FontAwesomeIcon icon={regular('cog')} />
          )}
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
