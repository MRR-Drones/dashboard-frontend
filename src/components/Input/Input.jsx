import React from 'react';
import './Input.scss';

export default function Input({ label, handleChange, value, placeholder, outline, white, fullwidth }) {
  return (
    <div className="Input">
      {label && <p className="label">{label}</p>}
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
    </div>
  );
}
