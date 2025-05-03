import React, { Component } from "react";

// 🔹 Class-based component banaya
export class NamedComponent extends Component {
  render() {
    return (
      <div>
        <h1>Named Export</h1>
      </div>
    );
  }
}

/*
Explanation:
-------------------------------------------
🔸 React se Component import kiya (class component banane ke liye)
🔸 NamedComponent ek class hai jo Component inherit karti hai
🔸 render() method ke andar JSX return hota hai
🔸 export keyword ke saath class ko named export kiya gaya

🟢 Named Export ka use tab hota hai jab aap multiple components ko 
   ek hi file se export karna chahte ho.

🟡 Isko import karne ke liye syntax:
    import { NamedComponent } from './components/NamedComponent';
*/
