import React from 'react';
import '../shared.scss';
import './Home.scss';

// import Button from '../../components/Button/Button';
// import Input from '../../components/Input/Input';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Notifications from '../../components/Notifications/Notifications';
// import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <PageWrapper
      sidebar={
        <div className="sidebar">
          <Notifications />
        </div>
      }
    >
      test
    </PageWrapper>
  );
}
