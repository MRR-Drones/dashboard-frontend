import React from 'react';
import './Tooltip.scss';

export default function Tooltip({ children, position, open, onClose }) {
  return (
    <>
      {open && <div aria-hidden="true" onClick={onClose} className="shade" />}
      {open && <div className={`tooltip ${position === 'bottom' ? 'bottom' : ' '}`}>{children}</div>}
    </>
  );
}
