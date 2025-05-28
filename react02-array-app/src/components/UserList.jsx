import React from "react";

function UserList() {
  // Array declared
  const arr = [12, 34, 56];

  // Array destructuring
  const [x, y, z] = arr;

  return (
    <div>
      <h1>x : {x}</h1>
      <h1>y : {y}</h1>
      <h1>z : {z}</h1>
    </div>
  );
}

export default UserList;

/*
Concept Points:
1. Array Destructuring:
   - Array ke elements ko alag-alag variables me assign karne ka easy tarika hai.

2. JSX Expression:
   - Curly braces {} ke andar JavaScript expressions likhkar dynamic data show kar sakte hain.

Important:
- Array destructuring me order matter karta hai. Pehla element first variable me assign hota hai, second element second variable me, and so on.
*/
