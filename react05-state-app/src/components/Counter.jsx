import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
   
    }
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
