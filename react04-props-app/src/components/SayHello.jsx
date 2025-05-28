import React from "react";

// props se data receive kar raha hai from parent component
const SayHello = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
    </div>
  );
};

export default SayHello;

/*
Concepts Used:
1. props           → Parent se child component ko data bhejne ke liye.
2. props.name      → props object se value access kar rahe hain.
3. JSX             → HTML jaise code ko JavaScript me likhne ka tarika.
4. Component       → Functional component hai jo UI part return karta hai.
5. export default  → Component ko dusri file me import karne ke liye.
*/
