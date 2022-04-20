import React from 'react';
import '../shared.scss';
import './Home.scss';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Map from '../../components/Map/Map';
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <PageWrapper>
      <Button red fullwidth>
        test
      </Button>
      <Button>test</Button>
      <Input label="email" placeholder="test" />
      <Input white placeholder="test" />
      <Map />
      <Card battery={20} speed={50} altitude={200} timeTravelled={23} number={1} status="active" />
      <Card battery={20} speed={50} altitude={200} timeTravelled={23} number={2} status="offline" small />
    </PageWrapper>
  );
}
