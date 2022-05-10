import React from 'react';
import './PageWrapper.scss';
import SideNav from './SideNav/SideNav';

export default function PageWrapper({ children, fullscreen }) {
  return (
    <div className="PageWrapper">
      <SideNav />
      <div className={`inner ${fullscreen ? 'fullscreen' : ''}`}>{children}</div>
    </div>
  );
}
