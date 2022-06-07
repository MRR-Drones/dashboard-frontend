import React from 'react';
import './DataItem.scss';

export default function DataItem({ icon, title, data, dataUnit }) {
  return (
    <div className="data-item">
      <div className="left">{icon}</div>
      <div className="right">
        <p className="title">{title}</p>
        <p>
          {data} {dataUnit}
        </p>
      </div>
    </div>
  );
}
