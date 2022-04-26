import React from 'react';
import '../shared.scss';
import './Home.scss';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
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
      <div className="cards-grid">
        <Card battery={20} speed={50} altitude={200} timeTravelled={23} number={1} status="offline" />
        <Card battery={20} speed={50} altitude={200} timeTravelled={23} number={2} status="active" />
      </div>
      <div className="cards-grid-small">
        <Card number={3} status="online" small />
        <Card number={4} status="active" small />
        <Card number={5} status="offline" small />
      </div>
    </PageWrapper>
  );
}
