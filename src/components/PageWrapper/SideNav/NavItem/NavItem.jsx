import React from 'react';
import './NavItem.scss';

export default function NavItem({ children, link, path }) {
  console.log(path);
  return (
    <a href={link} className={`NavItem ${window.location.pathname === link ? 'active' : ''}`}>
      {children}
    </a>
  );
}
