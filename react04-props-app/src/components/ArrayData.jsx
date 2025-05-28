import React from "react";

// even naam ka array props se mil raha hai
const ArrayData = ({ even }) => {
  return (
    <div>
      <h1>Even Number :</h1>
      <ul>
        {even.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayData;

/*
Concepts Used:
1. props              → Parent component se even naam ka array receive ho raha hai.
2. map() method       → Array ke har item ko ek <li> me convert karta hai.
3. key prop           → List banate waqt har item ko unique key dena hota hai.
4. JSX                → HTML jaise code ko JS me likhte hain.
5. Component          → Ye ek functional component hai.
6. export default     → Is file ko dusri jagah import karne ke liye.
*/
