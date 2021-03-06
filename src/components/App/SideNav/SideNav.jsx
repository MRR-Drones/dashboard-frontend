import React, { useState } from 'react';
import './SideNav.scss';

import { useLocation } from 'react-router-dom';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import NavItem from './NavItem/NavItem';
import Clock from './Clock/Clock';
import NotificationsBell from './NotificationsBell/NotificationsBell';
import Weather from './Weather/Weather';

import logo from '../../../assets/images/logo.png';

// Create and export context
export const SideNavContext = React.createContext(undefined);

export default function SideNav() {
  const location = useLocation();

  const [weatherTooltipOpen, setWeatherTooltipOpen] = useState(false);
  const [notificationsTooltipOpen, setNotificationsTooltipOpen] = useState(false);

  return (
    <SideNavContext.Provider
      value={{ weatherTooltipOpen, setWeatherTooltipOpen, notificationsTooltipOpen, setNotificationsTooltipOpen }}
    >
      <div className="SideNav">
        <div className="top">
          <img src={logo} alt="logo" />
        </div>
        <div className="middle">
          <NavItem link="/">
            {location.pathname === '/' ? (
              <FontAwesomeIcon icon={solid('chart-tree-map')} />
            ) : (
              <FontAwesomeIcon icon={regular('chart-tree-map')} />
            )}
          </NavItem>
          <NavItem link="/overview">
            {location.pathname === '/overview' ? (
              <FontAwesomeIcon icon={solid('map')} />
            ) : (
              <FontAwesomeIcon icon={regular('map')} />
            )}
          </NavItem>
          <NavItem link="/testpage">
            {location.pathname === '/testpage' ? (
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
    </SideNavContext.Provider>
  );
}
