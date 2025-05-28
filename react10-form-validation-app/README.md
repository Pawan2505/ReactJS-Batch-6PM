### **React Controlled Component with Validation**

---
This example demonstrates a **controlled component** in React with form validation for email and password fields.

```javascript
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
```

#### **Key Concepts:**

1. **useState()**:

   * We use `useState` to store the values of email, password, and error messages for validation.

2. **Controlled Component**:

   * The value of the input fields (`value={email}`, `value={password}`) is directly tied to the state, making them **controlled components**. Changes to the input fields are handled by the `onChange` event, updating the state as the user types.

3. **Form Validation**:

   * When the form is submitted:

     * **Email Validation**: Checks if the email field is empty.
     * **Password Validation**: Ensures the password is at least 6 characters long.
     * If validation fails, it shows the corresponding error messages.
     * If validation passes, it logs the values to the console and resets the form.

4. **Conditional Rendering**:

   * The error messages are conditionally rendered based on the state (`{emailErrors && <p>...</p>}`).

5. **Form Reset**:

   * After a successful form submission, the form fields are cleared using `setEmail("")` and `setPassword("")`.

---

### **Video Explanation**

For a more detailed explanation, check out this [Video Tutorial](https://drive.google.com/file/d/1PI48Hc1XQ52SdC4-3D22Cca_0mfXRrz6/view?usp=sharing).

### Here's the video link for form styling:

[Form Styling Video](https://drive.google.com/file/d/1fbUHKB5YfcgfYdUlOdCJ2uNkhoBD31lR/view?usp=sharing)


