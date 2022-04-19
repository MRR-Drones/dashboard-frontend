import React from 'react';
import './NavItem.scss';
import { useNavigate } from 'react-router-dom';

export default function NavItem({ children, pathName, link }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(link);
      }}
      className={`NavItem ${pathName === link ? 'active' : ''}`}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
