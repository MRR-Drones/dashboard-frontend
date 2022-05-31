import React from 'react';
import './Input.scss';

export default function Input({ label, handleChange, value, placeholder, outline, white, fullwidth, inputType }) {
  return (
    <div className="Input">
      {label && <p className="label">{label}</p>}
      <div className="input-wrapper">
        <input
          onChange={handleChange}
          value={value}
          type={inputType}
          placeholder={placeholder}
          className={`input ${white ? 'white' : ''} ${outline ? 'outline' : ''} `}
          style={{ width: `${fullwidth ? 'fullwidth' : ''}` }}
          id="input"
        />
      </div>
    </div>
  );
}
