import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? 'Error' : a / b;
      default: return b;
    }
  };

  const handleButtonClick = (buttonName) => {
    if (display === 'Error' && buttonName !== 'AC') return;

    if (/\d/.test(buttonName)) {
      if (waitingForOperand) {
        setDisplay(buttonName);
        setWaitingForOperand(false);
      } else {
        setDisplay(display === '0' ? buttonName : display + buttonName);
      }
    } else if (buttonName === '.') {
      if (!display.includes('.')) {
        setDisplay(display + '.');
      }
    } else if (buttonName === 'AC') {
      setDisplay('0');
      setPrevValue(null);
      setOperator(null);
      setWaitingForOperand(false);
    } else if (buttonName === '+/-') {
      setDisplay(String(parseFloat(display) * -1));
    } else if (buttonName === '%') {
      setDisplay(String(parseFloat(display) / 100));
    } else if (['+', '-', '×', '÷'].includes(buttonName)) {
      if (operator && !waitingForOperand) {
        const currentValue = parseFloat(display);
        const result = calculate(prevValue, currentValue, operator);
        setDisplay(String(result));
        setPrevValue(result);
      } else {
        setPrevValue(parseFloat(display));
      }
      setOperator(buttonName);
      setWaitingForOperand(true);
    } else if (buttonName === '=') {
      if (operator && prevValue !== null) {
        const currentValue = parseFloat(display);
        const result = calculate(prevValue, currentValue, operator);
        setDisplay(String(result));
        setPrevValue(null);
        setOperator(null);
        setWaitingForOperand(false);
      }
    }
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;