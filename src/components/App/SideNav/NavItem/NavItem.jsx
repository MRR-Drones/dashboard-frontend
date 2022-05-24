import React from 'react';
import './NavItem.scss';

import { Link } from 'react-router-dom';

export default function NavItem({ children, link }) {
  return (
    <Link to={link} className={`NavItem ${window.location.pathname === link ? 'active' : ''}`}>
      {children}
    </Link>
  );
}
