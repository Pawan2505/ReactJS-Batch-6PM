import React from "react";

// Components imported from ./components folder
import SayHello from "./components/SayHello";
import UserData from "./components/UserData";
import UserList from "./components/UserList";
import ArrayData from "./components/ArrayData";
import ProtoTypeComponent from "./components/ProtoTypeComponent";
import ChildProps from "./components/ChildProps";

const App = () => {
  // Variables to pass as props
  let x = 10;
  let name = "Pawan";
  let arr = [12, 34, 56, 78];
  let username = "Pawan";
  let salary = 123213;

  return (
    <div>
      {/* Props example using normal props object */}
      <SayHello name="Pawan" age="25" />

      {/* Destructuring props example */}
      <UserData name="Pawan" age="24" />

      {/* Props destructuring with variable values */}
      <UserList x={x} name={name} />

      {/* Props passing an array and displaying in list */}
      <ArrayData even={arr} />

      {/* Props + PropTypes + defaultProps concept */}
      <ProtoTypeComponent username={username} salary={salary} />
      {/* Or you can try with defaultProps:
          <ProtoTypeComponent />
      */}

      {/* Children props concept */}
      <ChildProps name="Pawan">
        <h1>This is passed as children from App.js</h1>
      </ChildProps>
    </div>
  );
};

export default App;

/*
Concepts Recap:
  1. props               → Parent component se data bhejna
  2. destructuring       → props ke andar se direct value nikaalna
  3. children props       → props.children ke zariye data bhejna (like <ChildProps>...</ChildProps>)
  4. PropTypes            → Type check karna for props
  5. defaultProps         → Default value set karna if props not passed
*/
