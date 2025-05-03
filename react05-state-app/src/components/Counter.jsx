// React aur useState hook ko import kiya
import React, { useState } from "react";


const Counter = () => {
 
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;

/* 
====================================
Explanation (React Counter)
====================================

🔸 1. React Functional Component banaya – Counter

🔸 2. useState Hook:
   → useState(0): Initial value 0
   → count: current value store karega
   → setCount: value ko update karega

🔸 3. Increment:
   → Button click se count +1 hota hai
   → Direct arrow function use hua onClick me

🔸 4. Decrement:
   → handleDecrement() custom function banaya
   → Condition lagayi: count > 0 hona chahiye
   → count -1 karega, but negative me nahi jaane dega

🔸 5. JSX:
   → return ke andar HTML-like syntax (JSX)
   → h1 me count display
   → 2 buttons banaye with onClick

🔸 6. export default:
   → Component ko dusri file me import karne ke liye use hota hai

*/
