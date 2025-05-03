// useState/useEffect hooks import kiye
import React, { useState, useEffect } from "react";

const ComponentLifiCycle = () => {
  // Component Lifecycle: Mount → Update → Unmount
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounting..");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    document.title = count; 
  }, [count]); 

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ComponentLifiCycle;

/*
==========================================================
Component Lifecycle (React Functional Component)
==========================================================

🔸 1. Mounting:
   - Jab component first time render hota hai
   - useEffect(() => { ... }, [])  → empty dependency
   - Console me "Mounting.." print hoga

🔸 2. Updating:
   - Jab state/props update hote hai
   - useEffect(() => { ... }, [count])
   - Jab bhi count badlega, tab document.title update hoga

🔸 3. Unmounting:
   - Jab component page se hata diya jaye
   - useEffect me return function → cleanup logic
   - Console me "Component will unmount" print hoga

🔸 4. useState:
   - count: value store karta hai
   - setCount: value ko update karta hai

🔸 5. JSX:
   - h1: count value show karta hai
   - button: increment logic

*/
