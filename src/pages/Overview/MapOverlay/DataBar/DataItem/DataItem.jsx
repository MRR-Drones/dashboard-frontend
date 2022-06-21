import React from 'react';
import './DataItem.scss';

export default function DataItem({ icon, title, data, dataUnit }) {
  return (
    <div className="data-item">
      <div className="left">{icon}</div>
      <div className="right">
        <p className="title">
          {title} ({dataUnit})
        </p>
        <p>{data}</p>
      </div>
    </div>
  );
}
