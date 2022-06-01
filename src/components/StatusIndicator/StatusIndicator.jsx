import React from 'react';
import './StatusIndicator.scss';

export default function StatusIndicator({ status }) {
  return (
    <div className="StatusIndicator">
      <div className={`indicator ${status}`} />
      <p>{status}</p>
    </div>
  );
}
