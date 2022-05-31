import React, { useState } from 'react';
import '../shared.scss';
import './Login.scss';
import { toast } from 'react-toastify';
import AuthService from '../../services/auth.service';

// Import components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

// Import images
import homeMockup from '../../assets/images/drone-home-macbook.png';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  let navigate = useNavigate();

  const loginHandler = () => {
    toast.dismiss();
    if (!nameValue) {
      toast.warn('Please enter your username!');
    } else if (!passwordValue) {
      toast.warn('Please enter your password');
    } else {
      AuthService.login(nameValue, passwordValue)
        .then((response) => {
          toast.success('Successfully logged in!');
          navigate('/overview');
        })
        .catch((error) => {
          toast.error(error.Message);
        });
    }
  };

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
            <Button onclick={loginHandler}>Sign in</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
