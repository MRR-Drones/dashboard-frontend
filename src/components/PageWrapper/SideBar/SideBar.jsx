import React, { useContext, useEffect } from 'react';
import './SideBar.scss';

// Import context
import { PageWrapperContext } from '../PageWrapper';

export default function PageWrapper({ sidebar, sidebarIcon, sidebarOpen }) {
  const { setSidebarOpen } = useContext(PageWrapperContext);

  // this useEffect runs when props.open changes and then locks or unlocks the body from overflowing
  useEffect(() => {
    if (sidebarOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sidebarOpen]);

  return (
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
        className={`sidenav-shade ${sidebarOpen ? 'open' : ''}`}
      />
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>{sidebar}</div>
    </>
  );
}
