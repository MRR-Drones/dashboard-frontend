import React from 'react';
import './NavItem.scss';

export default function NavItem({ children, active }) {
  return <div className={`NavItem ${active ? 'active' : 'active'}`}>{children}</div>;
}
