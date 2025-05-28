import React, { Component } from "react";

// 🔹 Class-based component banaya using default export
export default class PropsInClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>PropsInClassComponent : default export Component</h1>
      </div>
    );
  }
}

/*
Explanation:
-------------------------------------------
🔸 React se Component import kiya (class banane ke liye)
🔸 PropsInClassComponent ek class hai jo Component inherit karti hai
🔸 render() method ke andar JSX return ho raha hai
🔸 export default use kiya gaya – iska matlab ye component ek baar me 
   ek hi file se export hoga (only one default allowed per file)

🟡 Isko import karne ka syntax:
    import PropsInClassComponent from './components/PropsInClassComponent';

🟢 Jab bhi aapko sirf ek main component export karna ho file se, tab default export use karte hain.
*/
