import React from 'react';
import './PageWrapper.scss';
import SideNav from './SideNav/SideNav';

export default function PageWrapper({ children, sidebar }) {
  return (
    <div className={`PageWrapper ${sidebar ? 'sidebar' : ''}`}>
      <SideNav />
      <div className="inner">{children}</div>
      {sidebar && sidebar}
    </div>
  );
}
