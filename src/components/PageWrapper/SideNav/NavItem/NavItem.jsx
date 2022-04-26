import React from 'react';
import './NavItem.scss';
// import { useNavigate } from 'react-router-dom';

export default function NavItem({ children, path, link }) {
  // const navigate = useNavigate();

  return (
    <a href={link} className={`NavItem ${path === link ? 'active' : ''}`}>
      {children}
    </a>
  );
}
