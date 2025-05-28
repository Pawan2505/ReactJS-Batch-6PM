import React from "react";

// Importing components
// import FilterData from "./components/FilterData";
import SperadData from "./components/SperadData";
// import FruitList from "./components/FruitList";
// import MyComponent from "./components/MyComponent";
// import Greet from "./components/Greet";
// import SayHello from "./components/Hello";

const App = () => {
  return (
    <div>
      {/* Rendering Components */}
      {/* <h2>App.js file</h2> */}
      {/* <MyComponent /> */}
      {/* <Greet /> */}
      {/* <SayHello /> */}
      {/* <FruitList /> */}
      {/* <FilterData /> */}
      <SperadData />
    </div>
  );
};

export default App;

/*
Concept Points:
1. Component Import:
   - Alag-alag components ko App.js me import kiya jata hai file path ke through.

2. Component Rendering:
   - Jo component render karna ho, uska naam JSX ke andar use karte hain jaise <SperadData />.

3. Commenting Code:
   - Jab kisi component ko temporarily nahi dikhana ho, to uska render code comment kar dete hain.

4. export default:
   - App component ko export kiya jata hai taaki index.js me import karke poora app run kar sake.

Important:
- React project ka starting point mostly `App.js` file hota hai.
- Har component ka naam Capital Letter se start hota hai.
- Folder structure (components folder) maintain karna achhi practice hoti hai.
*/
