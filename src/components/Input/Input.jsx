import React from 'react';
import './Input.scss';

export default function Input(props) {
  const { handleChange, value, placeholder, outline, white, fullwidth } = props;
  return (
    <div className="input-wrapper">
      <input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        className={`input ${white ? 'white' : ''} ${outline ? 'outline' : ''} `}
        style={{ width: `${fullwidth ? 'fullwidth' : ''}` }}
        id="input"
      />
    </div>
  );
}
