import React from "react";

// Parent se name aur children props mil rahe hain
const ChildProps = (props) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      {/* children props se andar ka extra content render hoga */}
      {props.children}
    </div>
  );
};

export default ChildProps;

/*
Concepts Used:
1. props               → Parent component se data aata hai.
2. props.name          → props se name value access kar rahe hain.
3. props.children      → Parent se bheja gaya extra HTML ya component content render karta hai.
4. JSX                 → HTML jaise code ko JS me likhte hain.
5. Component           → Functional component hai jo UI return karta hai.
6. export default      → Dusri file me is component ko import karne ke liye.
*/
