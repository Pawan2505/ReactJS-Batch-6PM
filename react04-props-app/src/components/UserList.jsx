import React from "react";

// Function component with props
const UserList = ({ name, x }) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>x : {x}</h1>
    </div>
  );
};

export default UserList;


/*
Concepts Used:
1. props          → Parent component se child component me data bhejne ke liye.
2. { name, x }    → Props destructuring. Direct values access karne ke liye.
3. JSX            → HTML jaise syntax ko JS me likhne ka tarika.
4. Component      → Function jo ek part of UI return karta hai.
5. export default → Component ko bahar use karne ke liye export karte hain.
*/
