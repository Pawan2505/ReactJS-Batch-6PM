import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "", cpassword: "" });
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    if (user.password === user.cpassword) {
      console.log("Pssword match...");
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          console.log(res.user);
          navigate('/');
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.log("Password not match...");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <h1>This is SignUp Page</h1>

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
        <input
          className="form-control mb-4"
          type="password"
          name="cpassword"
          value={user.cpassword}
          onChange={handleChange}
          placeholder="Enter confirm password..."
        />
        <button className="w-100 btn btn-primary" type="submit">
          SignUp
        </button>
        <Link to="/">SignIn</Link>
      </form>
    </div>
  );
};

export default SignUp;
