import './App.css';
import React, { useState } from 'react';

function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState(0)
  
  const handleClick = (val) => {
    if (operation === '') {
      setNum1(num1 + val)
    } else {
      setNum2(num2 + val)
    }
  };
  const clickOperation = (val) => {
    if (result !== 0 || null) {
      setNum1(result)
      setNum2('')
      setOperation(val)
      console.log('llega aca');
    } else {
      setOperation(val)
    }
  };

  const clickDelete = () => {
    if ((num1 && num2) !== '' ) {
      setNum2('')
      setOperation('')
      setResult(0)
    } else if (num1 !== '') {
      setNum1('')
      setOperation('')
      setResult(0)
    }
  };
  console.log('Num 1: ',num1);
  console.log('Num 2: ',num2);
  console.log('Operacion: ',operation);
  console.log('Result: ',result);

  const getResult = () => {
    switch (operation) {
      case '+':
        setResult(Number(num1) + Number(num2));
        break;
      case '-':
        setResult(Number(num1) - Number(num2));
        break;
      case 'x':
        setResult(Number(num1) * Number(num2));
        break;
      case '/':
        setResult(Number(num1) / Number(num2));
        break;    
      default:
        break;
    }
  };

  const allClear = () => {
    setNum1('');
    setNum2('');
    setOperation('');
    setResult(0);
  };
  return (
    <>
    <div className="container">
      <div className="calculator">
        <div className="output">
          <div className='previous-operand' maxLength={8}>{result ? (operation ? num1 + operation + num2 : ''):(operation ? num1 + operation : '')}</div>
          <div className='current-operand' maxLength={8} >{result ? result : (!operation ? num1 : num2)}</div>
        </div>
          <button onClick={allClear} className='span-two'>AC</button>
          <button onClick={clickDelete}>DEL</button>
          <button onClick={() => {clickOperation('/')}}>/</button>
          <button onClick={() => {handleClick(7)}}>7</button>
          <button onClick={() => {handleClick(8)}}>8</button>
          <button onClick={() => {handleClick(9)}}>9</button>
          <button onClick={() => {clickOperation('x')}}>x</button>
          <button onClick={() => {handleClick(4)}}>4</button>
          <button onClick={() => {handleClick(5)}}>5</button>
          <button onClick={() => {handleClick(6)}}>6</button>
          <button onClick={() => {clickOperation('-')}}>-</button>
          <button onClick={() => {handleClick(1)}}>1</button>
          <button onClick={() => {handleClick(2)}}>2</button>
          <button onClick={() => {handleClick(3)}}>3</button>
          <button onClick={() => {clickOperation('+')}}>+</button>
          <button onClick={() => {handleClick(0)}}>0</button>
          <button>.</button>
          <button onClick={getResult} className='span-two'>=</button>
      </div>
    </div>
    </>
    );
}

export default App;
