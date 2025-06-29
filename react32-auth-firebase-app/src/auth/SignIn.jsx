import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        console.log("Login successfully...")
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error.message)
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <h1>This is SignIn Page</h1>

      <form onSubmit={handleSubmit} className="p-5 mt-5 m-auto w-50 shadow">
        <input
          className="form-control mb-4"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter email..."
        />
        <input
          className="form-control mb-4"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter password..."
        />
        <button className="w-100 btn btn-primary" type="submit">
          SignUp
        </button>
        <Link to="/signup">SignUp</Link>
      </form>
    </div>
  );
};

export default SignIn;
