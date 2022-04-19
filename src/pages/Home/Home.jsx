import React from 'react';
import '../shared.scss';
import './Home.scss';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Map from '../../components/Map/Map';

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
    </PageWrapper>
  );
}
