import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ComponentLifiCycle = () => {
    // create -> upadate-> remove
    // mounting -> updating -> unmounting
    
    const [count, setCount] = useState(0);
//mounting -> reload
    useEffect(() => {
      console.log("Mounting..");

      // Unmount
      return () => {
        console.log(" Component will unmount");
      };
    }, [])
    
    // update
    useEffect(() => {
        document.title = count;
    }, [count]);
    
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ComponentLifiCycle