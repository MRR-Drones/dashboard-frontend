import React, { useState } from 'react';
import './PageWrapper.scss';

export default function PageWrapper({ children, sidebar, fullscreen, sidebarIcon }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`PageWrapper ${sidebar ? 'sidebar' : ''}`}>
      <div className={`inner ${fullscreen ? 'fullscreen' : ''}`}>{children}</div>
      {sidebar && (
        <>
          <div
            aria-hidden="true"
            className="sidebarToggle"
            onClick={() => {
              setSidebarOpen(true);
            }}
          >
            {sidebarIcon}
          </div>
          <div
            aria-hidden="true"
            onClick={() => {
              setSidebarOpen(false);
            }}
            className={`shade ${sidebarOpen ? 'open' : ''}`}
          />
          <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>{sidebar}</div>
        </>
      )}
    </div>
  );
}
