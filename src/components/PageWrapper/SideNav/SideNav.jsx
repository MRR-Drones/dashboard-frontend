import React from 'react';
import './SideNav.scss';
import { useLocation, useNavigate } from 'react-router-dom';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartTreeMap } from '@fortawesome/pro-regular-svg-icons';

// Import components
import NavItem from './NavItem/NavItem';

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
      >
        <p>Top</p>
      </div>
      <div className="middle">
        <NavItem link="/overview" pathName={pathName}>
          <FontAwesomeIcon icon={faChartTreeMap} />
        </NavItem>
      </div>
      <div className="bottom">
        <p>Bottom</p>
      </div>
    </div>
  );
}
