import React, { useRef } from "react";

const App = () => {
  const username = useRef();
  const emailRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username.current.value);
    console.log(emailRef.current.value);
  };

  const formStyle = { width: "500px", padding: "10px", boxShadow: "0 0 10px gray", margin: 'auto' };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        style={{
          width: "80%",
          padding: " 10px",
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
          padding: " 10px",
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
          padding: " 10px",
          margin: "10px",
          borderRadius: "10px",
        }}
        onClick={() => username.current.focus()}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default App;
