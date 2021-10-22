import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onReset }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    );
}


export default Counter;