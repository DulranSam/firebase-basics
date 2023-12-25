import React, { useState } from "react";
import { auth, googleAuth } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = () => {
  const [data, setData] = useState({
    mail: "",
    password: "",
  });

  const { mail, password } = data;

  console.log(auth?.currentUser?.photoURL);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission
    try {
      await createUserWithEmailAndPassword(auth, mail, password);
    } catch (err) {
      console.error(err);
    }
  };

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="mail"
          placeholder="Email"
          value={mail}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={googleSignIn}>Google login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Auth;
