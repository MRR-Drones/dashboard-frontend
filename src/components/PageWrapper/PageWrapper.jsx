import React from 'react';
import './PageWrapper.scss';

export default function PageWrapper({ children, sidebar, fullscreen }) {
  return (
    <div className={`PageWrapper ${sidebar ? 'sidebar' : ''}`}>
      <div className={`inner ${fullscreen ? 'fullscreen' : ''}`}>{children}</div>
      {sidebar && sidebar}
    </div>
  );
}
