import React, { useState } from 'react';
import '../shared.scss';
import './TestPage.scss';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Card from '../../components/Card/Card';

export default function TestPage() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  return (
    <PageWrapper>
      <div className="TestPage">
        <Button red fullwidth>
          test
        </Button>
        <Button>test</Button>
        <Input
          value={inputValue}
          handleChange={(event) => {
            setInputValue(event.target.value);
          }}
          label="email"
          placeholder="test"
        />
        <Input
          value={inputValue2}
          handleChange={(event) => {
            setInputValue2(event.target.value);
          }}
          white
          placeholder="test"
        />
        <div className="cards-grid">
          <Card battery={20} speed={50} altitude={200} timeTravelled={23} number={1} status="offline" />
          <Card battery={20} speed={50} altitude={200} timeTravelled={23} number={2} status="active" />
        </div>
        <div className="cards-grid-small">
          <Card number={3} status="online" small />
          <Card number={4} status="active" small />
          <Card number={5} status="offline" small />
        </div>
      </div>
    </PageWrapper>
  );
}
