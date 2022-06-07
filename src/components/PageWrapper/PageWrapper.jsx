import React from 'react';
import './PageWrapper.scss';

// Import components
import SideBar from './SideBar/SideBar';

export default function PageWrapper({ children, sidebar, fullscreen }) {
  return (
    <div className={`PageWrapper ${sidebar ? 'sidebar' : ''}`}>
      <div className={`inner ${fullscreen ? 'fullscreen' : ''}`}>{children}</div>
      {sidebar && <SideBar sidebar={sidebar} />}
    </div>
  );
}
