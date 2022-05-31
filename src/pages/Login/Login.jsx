import React, { useState } from 'react';
import '../shared.scss';
import './Login.scss';

// Import components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

// Import images
import homeMockup from '../../assets/images/drone-home-macbook.png';

export default function Login() {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <div className="login">
      <div className="left">
        <img alt="mockup" src={homeMockup} />
      </div>
      <div className="right">
        <div className="inner">
          <h3>Login</h3>
          <Input
            handleChange={(event) => {
              setNameValue(event.target.value);
            }}
            value={nameValue}
            label="gebruikersnaam"
            placeholder="gebruikersnaam"
          />
          <Input
            handleChange={(event) => {
              setPasswordValue(event.target.value);
            }}
            inputType="password"
            value={passwordValue}
            label="wachtwoord"
            placeholder="wachtwoord"
          />
          <div className="button-wrapper">
            <Button>Sign in</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
