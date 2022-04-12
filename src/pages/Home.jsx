import React from 'react';
import './shared.scss';

import Placeholder from '../components/Placeholder/Placeholder';
import Button from '../components/Button/Button';

export default function Home() {
  return (
    <div className="page home">
      <Placeholder />
      <Button>test</Button>
    </div>
  );
}
