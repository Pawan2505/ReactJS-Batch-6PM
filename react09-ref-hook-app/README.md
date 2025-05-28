### **React Form Handling with `useRef` (Uncontrolled Component)**

---

#### **1. Using `useRef` for Form Input Access**

In this example, we’ll use the `useRef` hook to directly access form elements like input fields. This approach is typically used for **uncontrolled components**, where React doesn't control the form data via state but instead directly manipulates the DOM.

#### **Code Explanation**

```javascript
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
        ref={username} // Ref to access username input
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
        ref={emailRef} // Ref to access email input
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
```

#### **Key Concepts:**

1. **useRef()**:

   * Used to get direct access to the DOM elements like input fields.

2. **username.current.value**:

   * Retrieves the value from the input fields without needing `useState`.

3. **Form Behavior**:

   * **e.preventDefault()**: Prevents page reload when the form is submitted.

4. **Button Actions**:

   * Submits the form.
   * Focuses the cursor on the username input field after clicking the button using `username.current.focus()`.

5. **Uncontrolled Component**:

   * No React state is involved in handling form data. The form data is managed directly by the DOM.

6. **Styling**:

   * Inline styling is applied to keep things simple for beginners.

---

### **Video Explanation**

For a more detailed explanation, check out this [Video Tutorial](https://drive.google.com/file/d/1J7WR3VY_vYyBIY2qH9olS9fHQxwXiXh_/view?usp=sharing).


