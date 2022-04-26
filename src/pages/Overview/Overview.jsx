import React from 'react';
import '../shared.scss';
import './Overview.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Map from '../../components/Map/Map';

export default function Home() {
  return (
    <PageWrapper>
      <p>overview</p>
      <Map />
    </PageWrapper>
  );
}
