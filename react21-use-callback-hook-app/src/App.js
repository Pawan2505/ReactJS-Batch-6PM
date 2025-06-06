import React, { useCallback, useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0);

  const handleClick = useCallback(()=>{
    setCount(count+1)
  },[count])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App
