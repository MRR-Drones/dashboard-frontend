import React from 'react';
import './SideBar.scss';

export default function PageWrapper({ sidebar }) {
  return <div className="sidebar">{sidebar}</div>;
}
