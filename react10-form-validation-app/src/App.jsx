import React, { useState } from "react";

const App = () => {
  // Step 1: Define state for inputs and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");

  // Step 2: Handle form submit with validation
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    // Reset previous errors
    setEmailErrors("");
    setPasswordErrors("");

    let isValidate = true;

    // Email validation
    if (email.trim() === "") {
      setEmailErrors("Email is Required!");
      isValidate = false;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordErrors("Password should be minimum six letters!");
      isValidate = false;
    }

    // If all validation passed
    if (isValidate) {
      console.log(email);
      console.log(password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={{ maxWidth: "500px", padding: "20px" }}>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailErrors && <p style={{ color: "red" }}>{emailErrors}</p>}
        </div>

        <div>
          <input
            type="password"
            value={password}
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordErrors && <p style={{ color: "red" }}>{passwordErrors}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

/*
=========================
📝 Controlled Component with Validation
=========================

1. useState() is used to store email, password, and error messages.

2. Input fields are controlled because their value is linked to state (value={...}).

3. onChange event updates the state in real-time as user types.

4. When the form is submitted:
   - Validation checks if email is empty.
   - Checks if password is at least 6 characters.
   - If validation fails, shows error messages.
   - If success, shows values in console and resets form.

5. Error messages are conditionally rendered using:
   `{emailErrors && <p>...</p>}`

6. This is a basic example of **form handling + input validation** in React.

7. You can expand this by adding more validations or using external libraries like `yup` or `react-hook-form`.
*/
