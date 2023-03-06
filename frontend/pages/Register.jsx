import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/index.css";
import { registerRoute } from "../utils/ApiRoutes";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [value, setvalue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(()=>{
    if(localStorage.getItem("chat-app-user")){
      navigate('/')
    }

  }  , []);

  const handlevalidation = () => {
    const { password, confirmPassword, username, email } = value;

    if (password != confirmPassword) {
      // used to put the error
      alert("password and confirm password should be same");

      return false;
    } else if (username.length < 3) {
      alert('Username should be greater than three character');
      return false;
      // at that time you meet the condition get out
    } else if (password.length < 8) {
      alert("Password should be  equal or greater than 8 characters");
      return false;
    } else if (email === "") {
      alert("email is required ");
    }

    return true;
  };

  const handlechange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    // validating that user had enter the correct or not
    if (handlevalidation()) {
      const { username, email, password, confirmPassword } = value;

      const { data } = await axios.post(registerRoute, {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      console.log(data);
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: "#131324",
      }}
    >
      <form
        onSubmit={(event) => {
          handlesubmit(event);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          backgroundColor: "#00000076",
          borderRadius: "2rem",
          padding: "3rem 5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h1 style={{ color: "white", textTransform: "uppercase" }}>Chatty</h1>
        </div>

        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => {
            handlechange(e);
          }}
          autoComplete="on"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => {
            handlechange(e);
          }}
          autoComplete="on"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            handlechange(e);
          }}
          autoComplete="on"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => {
            handlechange(e);
          }}
          autoComplete="on"
        />
        <button type="submit">Create Users</button>

        <span>
          Already Have an account ? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;

/*
height: "100vh",
        width: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        gap: "1rem",
        backgroundColor: "#131324",




        display :'flex' , flexDirection : 'column', gap : '2rem' , backgroundColor : '#00000076' , borderRadius : '2rem' , padding : '3rem 5rem'



         display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",



             color: "white", textTransform: "uppercase"




*/
