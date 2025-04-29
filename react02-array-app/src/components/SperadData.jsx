import React from "react";

const SperadData = () => {
  // Two arrays defined
  let arr1 = [1, 2, 3, 4];
  let arr2 = [5, 6, 7, 8, 9];

  // Merging arrays using spread operator
  const mergedArray = [...arr1, ...arr2];

  return (
    <div>
      <h1>Merged Array</h1>
      <ul>
        {mergedArray.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default SperadData;

/*
Concept Points:
1. Spread Operator (...) :
   - Spread operator array ke elements ko expand karta hai.
   - Humne yahan 2 arrays ko merge kiya: [...arr1, ...arr2].

2. map() method:
   - Array ke har element ko li tag me dikhane ke liye map() ka use kiya gaya hai.

3. key prop:
   - List ke elements ke sath unique key dena zaruri hota hai React ke performance ke liye.

*/
