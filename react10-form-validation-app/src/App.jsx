import React, { useState } from 'react'

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailErrors("");
    setPasswordErrors("");

    let isValidate = true;

    if (email.trim() === '') {
      setEmailErrors("Email is Required!");
      isValidate = false;
    }

    if (password.length < 6) {
      setPasswordErrors("Password should be minimum six letters!");
      isValidate = false;
    }


    // return isValidate;

    if (isValidate) {
      console.log(email)
      console.log(password)
      setEmail('');
      setPassword('');

    }
  }

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
}

export default App