import React from "react";

const FruitList = () => {
  // Fruits ka array
  const fruits = ["Apple", "Banana", "Kivi", "Papaya"];

  return (
    <div>
      <h1>Fruit List:</h1>

      <ul>
        {/* fruits array ko map karke list item me show kar rahe hain */}
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;

/*
Concept Points:
1. map() method:
   - Array ke har element ko ek naya output deta hai (jaise <li> me show karte hain).

2. key prop:
   - Jab list banate hain React mein, har item ko unique key dena zaruri hota hai React ke better performance ke liye.

Important:
- map() function ke andar hum singular naam ka variable use karte hain (fruit), taaki confusion na ho.
- Always use unique and meaningful names inside map callback.
*/
