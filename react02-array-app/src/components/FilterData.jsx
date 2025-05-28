import React from "react";

const FilterData = () => {
  // Original array
  const arr = [12, 34, 56, 67];

  // Filter out even numbers
  const evenNumbers = arr.filter((num) => num % 2 === 0);

  return (
    <div>
      <h1>Even Numbers:</h1>
      <ul>
        {evenNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterData;



/*
Concept Points:
1. filter() method:
   - Array ke andar se condition ke hisaab se data nikalta hai.

2. map() method:
   - Array ke har element ko ek naya output format deta hai (jaise <li> banake).

3. key prop:
   - Jab React mein list create karte hain, toh har element ko ek unique key dena zaroori hota hai, taaki efficiently update ho.

4. export default:
   - Component ko export karte hain taaki hum ise dusri files mein import karke use kar saken.
*/
