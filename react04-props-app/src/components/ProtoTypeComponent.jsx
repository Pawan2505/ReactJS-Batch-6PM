import React from "react";
import PropTypes from "prop-types";

// Destructuring props in function parameter
const ProtoTypeComponent = ({ username, salary }) => {
  return (
    <div>
      <h1>username : {username}</h1>
      <h1>salary : {salary}</h1>
    </div>
  );
};

// PropTypes → props ka type define karte hain
ProtoTypeComponent.propTypes = {
  username: PropTypes.string,
  salary: PropTypes.number,
};

// defaultProps → agar koi prop na aaye to ye default value use hoti hai
ProtoTypeComponent.defaultProps = {
  username: "Pawan Maurya",
  salary: 11111,
};

export default ProtoTypeComponent;

/*
📝 Concepts Used:
1. props               → Parent se data milta hai function ke through.
2. destructuring       → props se direct { username, salary } nikaal liya.
3. PropTypes           → props ka type define karte hain (like string, number).
4. defaultProps        → Agar prop na aaye to default value use hogi.
5. JSX                 → HTML jaisa syntax JS me likha jaata hai.
6. Component           → Functional component hai jo ek part of UI return karta hai.
7. export default      → Dusri file me use karne ke liye component export kiya gaya hai.
*/
