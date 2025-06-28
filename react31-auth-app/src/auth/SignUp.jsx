import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import {createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    if (user.password === user.cpassword) {
      console.log("Password Match...");
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          console.log(res.user);
          console.log("User Register Successfully...")
          navigate('/')
        })
        .catch((error) => {
          console.log(error.message); 

          // ..
        });
    } else {
      console.log("Password Not Match...");
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <h1>This is SignUp Page</h1>

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
        <input
          className="form-control mb-3"
          type="password"
          name="cpassword"
          value={user.cpassword}
          placeholder="Enter confirm password..."
          onChange={handleChange}
        />
        <button className="btn btn-primary w-100" type="submit">
          Save
        </button>
      </form>

      <Link to="/">SignIn</Link>
    </div>
  );
};

export default SignUp;
