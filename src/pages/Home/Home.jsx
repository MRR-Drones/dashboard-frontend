import React from 'react';
import '../shared.scss';
import './Home.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Notifications from '../../components/Notifications/Notifications';
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <PageWrapper
      sidebar={
        <div className="sidebar">
          <h2>Latest activity</h2>
          <Notifications />
        </div>
      }
    >
      <div className="home">
        <h2>Homepage</h2>
        <div className="map">
          <div className="map-inner" />
        </div>
        <div className="row">
          <h3>Active drones</h3>
          <div className="cards-grid-small">
            <Card number={3} status="online" small />
            <Card number={4} status="active" small />
            <Card number={5} status="offline" small />
          </div>
        </div>
        <div className="row">
          <h3>Videos</h3>
        </div>
      </div>
    </PageWrapper>
  );
}
