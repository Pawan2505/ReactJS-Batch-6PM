import React, { useMemo, useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(2);

  const square = useMemo(()=>{
    return number * number;
  },[number])
  return (
    <div>
      <h1>Square : {square}</h1>
      <button onClick={()=>setNumber(number+1)}>Square</button>
    </div>
  )
}

export default App

