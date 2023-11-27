import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/"); // Use the navigate function
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <div className="email">
          <p>Create Email Address:</p>
          <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="password">
          <p>Create Password:</p>
          <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <button type="submit">Sign Up</button>
        <p>
          Already Have account?<Link to="/login" style={{ textDecoration: "none" }}>Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
