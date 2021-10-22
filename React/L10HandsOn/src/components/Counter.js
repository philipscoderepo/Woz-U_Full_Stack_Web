import React from 'react';

const Counter = ({ count, incrementCounter, input, onDecrement, onIncrement, onInputChange, onChangeCountNumber }) => {
  
  return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>Times the increment/decrement buttons have been clicked: {incrementCounter}</p>
          <br />
          <input 
            type={'number'}
            onChange={event => onInputChange(event.target.value)}
            value={input}
          />
          <button onClick={onChangeCountNumber}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;