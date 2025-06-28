import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error.message)
      });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <h1>This is SignIn Page</h1>

      <form onSubmit={handleSubmit} className="shadow p-5 mt-5 m-auto w-50">
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter email..."
          onChange={handleChange}
        />
        <input
          className="form-control mb-3"
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter password..."
          onChange={handleChange}
        />
        <button className="btn btn-primary w-100" type="submit">
          Save
        </button>
      </form>
      <Link to="/signup">SignUp</Link>
    </div>
  );
};

export default SignIn;
