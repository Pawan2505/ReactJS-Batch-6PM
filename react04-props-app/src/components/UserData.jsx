import React from "react";

// Functional component receiving props (name, age)
const UserData = ({ name, age }) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
    </div>
  );
};

export default UserData;

/*
Concepts Used:
1. props           → Data receive karne ke liye from parent component.
2. { name, age }   → Props destructuring – direct use of values.
3. JSX             → HTML-like code written in JS file.
4. Component       → Reusable UI block banaya gaya hai.
5. export default  → Component ko dusri file me use karne ke liye.
*/
