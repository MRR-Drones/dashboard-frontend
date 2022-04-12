import React from 'react';
import '../shared.scss';
import './Home.scss';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export default function Home() {
  return (
    <div className="page home">
      <Button red fullwidth>
        test
      </Button>
      <Button>test</Button>
      <Input label="email" placeholder="test" />
      <Input white placeholder="test" />
    </div>
  );
}
