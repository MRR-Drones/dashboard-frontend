import React from 'react';
import './Tooltip.scss';

export default function Tooltip({ children, position }) {
  return (
    <>
      <div className="shade" />
      <div className={`tooltip ${position === 'bottom' ? 'bottom' : ' '}`}>{children}</div>
    </>
  );
}
