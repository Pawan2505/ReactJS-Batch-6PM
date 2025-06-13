import React, { useCallback, useState } from 'react'
import MyButton from './MyButton';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount(prev=>prev+1);
  }, []);

  const decrese = useCallback(() => {
    setCount(pre=>pre-1);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrese}>Decrement</button>
      <br /><br />
      <MyButton increase={increase} />
    </div>
  );
};

export default Counter;
