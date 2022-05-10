import React from 'react';
import './PageWrapper.scss';

export default function PageWrapper({ children, sidebar }) {
  return (
    <div className={`PageWrapper ${sidebar ? 'sidebar' : ''}`}>
      <div className="inner">{children}</div>
      {sidebar && sidebar}
    </div>
  );
}
