import React from 'react';
import '../shared.scss';
import './Login.scss';

// Import components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

// Import images
import homeMockup from '../../assets/images/drone-home-macbook.png';

export default function Login() {
  return (
    <div className="login">
      <div className="left">
        <img alt="mockup" src={homeMockup} />
      </div>
      <div className="right">
        <div className="inner">
          <h3>Login</h3>
          <Input label="gebruikersnaam" placeholder="gebruikersnaam" />
          <Input label="wachtwoord" placeholder="wachtwoord" />
          <div className="button-wrapper">
            <Button>Sign in</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
