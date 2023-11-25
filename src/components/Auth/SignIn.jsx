import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import "./SignIn.scss";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        alert("Password or Email is incorrect ❌");
      });
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In </h1>
        <div className="email">
          <p>Email Address:</p>
          <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="password">
          <p>Password:</p>
          <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <button type="submit">Log in</button>
        <p>
          Have no account?<Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
