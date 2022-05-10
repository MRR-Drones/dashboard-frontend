import React from 'react';
import './PageWrapper.scss';

export default function PageWrapper({ children }) {
  return (
    <div className="PageWrapper">
      <div className="inner">{children}</div>
    </div>
  );
}
