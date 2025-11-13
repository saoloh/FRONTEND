import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

function ButtonPanel({ onButtonClick }) {
  const handleClick = (buttonName) => {
    onButtonClick(buttonName);
  };

  return (
    <div className="button-panel">
      <Button label="AC" onClick={handleClick} className="function" />
      <Button label="+/-" onClick={handleClick} className="function" />
      <Button label="%" onClick={handleClick} className="function" />
      <Button label="÷" onClick={handleClick} className="operator" />

      <Button label="7" onClick={handleClick} />
      <Button label="8" onClick={handleClick} />
      <Button label="9" onClick={handleClick} />
      <Button label="×" onClick={handleClick} className="operator" />

      <Button label="4" onClick={handleClick} />
      <Button label="5" onClick={handleClick} />
      <Button label="6" onClick={handleClick} />
      <Button label="-" onClick={handleClick} className="operator" />

      <Button label="1" onClick={handleClick} />
      <Button label="2" onClick={handleClick} />
      <Button label="3" onClick={handleClick} />
      <Button label="+" onClick={handleClick} className="operator" />

      <Button label="0" onClick={handleClick} className="zero" />
      <Button label="." onClick={handleClick} />
      <Button label="=" onClick={handleClick} className="operator" />
    </div>
  );
}

export default ButtonPanel;