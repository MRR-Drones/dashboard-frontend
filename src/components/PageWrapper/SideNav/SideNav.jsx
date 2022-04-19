import React from 'react';
import './SideNav.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartTreeMap } from '@fortawesome/pro-regular-svg-icons';

// Import components
import NavItem from './NavItem/NavItem';

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="top">
        <p>Top</p>
      </div>
      <div className="middle">
        <NavItem>
          <FontAwesomeIcon icon={faChartTreeMap} />
        </NavItem>
      </div>
      <div className="bottom">
        <p>Bottom</p>
      </div>
    </div>
  );
}
