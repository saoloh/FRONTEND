import React from 'react';
import './Button.css';

const Button = ({ label, onClick, className }) => {
  return (
    <button onClick={() => onClick(label)} className={`button ${className || ''}`}>
      {label}
    </button>
  );
};

export default Button;