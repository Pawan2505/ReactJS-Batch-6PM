import React, { useRef } from "react";

const App = () => {
  // Step 1: Create refs for inputs
  const username = useRef();
  const emailRef = useRef();

  // Step 2: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    console.log(username.current.value); // show username in console
    console.log(emailRef.current.value); // show email in console
  };

  // Inline style for form box
  const formStyle = {
    width: "500px",
    padding: "10px",
    boxShadow: "0 0 10px gray",
    margin: "auto",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        style={{
          width: "80%",
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
        }}
        type="text"
        ref={username}
        placeholder="Enter UserName"
      />
      <input
        style={{
          width: "80%",
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
        }}
        type="email"
        ref={emailRef}
        placeholder="Enter Email"
      />
      <button
        style={{
          width: "85%",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
        }}
        onClick={() => username.current.focus()} // focus cursor to username field
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default App;

/*
======================
📝 ReactJS Form with useRef
======================

1. useRef() is used to get direct access to DOM elements like input fields.

2. username.current.value → gives value from input without using useState.

3. The form uses onSubmit and handleSubmit to control form behavior.

4. e.preventDefault() stops page reload when form is submitted.

5. Button has two jobs:
   - Submits the form.
   - Focuses back to username input using username.current.focus()

6. This is an example of an uncontrolled component because we are not using state.

7. All styling is done using inline style objects to keep it simple for beginners.
*/
