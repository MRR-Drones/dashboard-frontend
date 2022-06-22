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

export default function DataBar({ realTimeData, number = 1, status = 'online' }) {
  const data = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={regular('battery-half')} />,
      title: 'Battery',
      data: realTimeData ? realTimeData.ba : 'Unknown',
      dataUnit: 'V',
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={regular('timer')} />,
      title: 'Speed',
      data: realTimeData ? (realTimeData.cu ? realTimeData.cu : 'Unknown') : 'Unknown',
      dataUnit: 'km/h',
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={regular('compass')} />,
      title: 'Heading',
      data: realTimeData ? (realTimeData.cu ? realTimeData.cu : 'Unknown') : 'Unknown',
      dataUnit: 'm',
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={regular('gauge-high')} />,
      title: 'Velocity X',
      data: realTimeData ? (realTimeData.vx ? realTimeData.cu : 'Unknown') : 'Unknown',
      dataUnit: 'm/s',
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={regular('gauge-high')} />,
      title: 'Velocity Y',
      data: realTimeData ? (realTimeData.vy ? realTimeData.cu : 'Unknown') : 'Unknown',
      dataUnit: 'm/s',
    },
    {
      id: 6,
      icon: <FontAwesomeIcon icon={regular('gauge-high')} />,
      title: 'Velocity Z',
      data: realTimeData ? (realTimeData.vz ? realTimeData.cu : 'Unknown') : 'Unknown',
      dataUnit: 'm/s',
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
        <CoordinatesBox lat={realTimeData?.la} long={realTimeData?.lo} alt={realTimeData?.al} />
        <Button outlined fullwidth>
          More data
        </Button>
      </div>
    </div>
  );
}
