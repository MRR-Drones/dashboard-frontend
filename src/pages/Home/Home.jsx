import React from 'react';
import '../shared.scss';
import './Home.scss';
import { motion } from 'framer-motion';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Components
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Notifications from '../../components/Notifications/Notifications';
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <PageWrapper
      sidebar={
        <>
          <div className="heading">
            <h2>Latest activity</h2>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.25 }} whileTap={{ scale: 0.75 }}>
              <FontAwesomeIcon className="clearAll" icon={solid('bars-staggered')} />
            </motion.div>
          </div>
          <Notifications />
        </>
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
