import React from 'react';
import './DataBar.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import StatusIndicator from '../../../../components/StatusIndicator/StatusIndicator';
import DataItem from './DataItem/DataItem';
import CoordinatesBox from './CoordinatesBox/CoordinatesBox';
import Button from '../../../../components/Button/Button';

export default function DataBar({ number = 1, status = 'online' }) {
  const data = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={regular('battery-half')} />,
      title: 'Battery',
      data: 83,
      dataUnit: '%',
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={regular('timer')} />,
      title: 'Speed',
      data: 20,
      dataUnit: 'km/h',
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={regular('arrows-up-down')} />,
      title: 'Altitude',
      data: 200,
      dataUnit: 'm',
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={regular('clock-rotate-left')} />,
      title: 'Flight time left',
      data: 45,
      dataUnit: 'min',
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={regular('route')} />,
      title: 'Covered distance',
      data: 3800,
      dataUnit: 'm',
    },
    {
      id: 6,
      icon: <FontAwesomeIcon icon={regular('home')} />,
      title: 'Distance from home',
      data: 1493,
      dataUnit: 'm',
    },
    {
      id: 7,
      icon: <FontAwesomeIcon icon={regular('map-pin')} />,
      title: 'Coordinates',
    },
  ];

  return (
    <div className="data-bar">
      <div className="top">
        <div className={`border-left ${status}`} />
        <p className="name">Drone</p>
        <p className="icon">{number}</p>
        <StatusIndicator number={2} status={status} />
        <p className="route">Inspection round 1</p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <DataItem key={item.id} icon={item.icon} title={item.title} data={item.data} dataUnit={item.dataUnit} />
        ))}
        <CoordinatesBox lat="200" long="-120" alt="200" />
        <Button outlined fullwidth>
          More data
        </Button>
      </div>
    </div>
  );
}
