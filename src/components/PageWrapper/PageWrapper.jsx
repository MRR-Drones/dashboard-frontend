import React, { useState } from 'react';
import './PageWrapper.scss';

// Import components
import SideBar from './SideBar/SideBar';

// Create and export context
export const PageWrapperContext = React.createContext();

export default function PageWrapper({ children, sidebar, fullscreen, sidebarIcon }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PageWrapperContext.Provider value={{ setSidebarOpen }}>
      <div className={`PageWrapper ${sidebar ? 'sidebar' : ''}`}>
        <div className={`inner ${fullscreen ? 'fullscreen' : ''}`}>{children}</div>
        {sidebar && <SideBar sidebarOpen={sidebarOpen} sidebarIcon={sidebarIcon} sidebar={sidebar} />}
      </div>
    </PageWrapperContext.Provider>
  );
}
