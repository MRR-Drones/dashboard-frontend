import React from 'react';
import './PageWrapper.scss';
import SideNav from './SideNav/SideNav';

export default function PageWrapper({ children }) {
  return (
    <div className="PageWrapper">
      <SideNav />
      <div className="inner">{children}</div>
    </div>
  );
}
