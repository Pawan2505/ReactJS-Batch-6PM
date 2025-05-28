import React from 'react'

const CounterUI = ({count,increment}) => {
  return (
    <>
      <button onClick={increment}>Count : {count}</button>
    </>
  );
}

export default CounterUI