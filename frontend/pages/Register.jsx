import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/index.css";
import { registerRoute } from "../utils/ApiRoutes";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function Register() {
  const navigate = useNavigate();
  const [value, setvalue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOption = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const toastOptionSuccess = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };


  useEffect(()=>{
    if(localStorage.getItem("chat-app-user")){
      navigate('/')
    }

  }  , []);

  const handlevalidation = () => {
    const { password, confirmPassword, username, email } = value;

    if (password != confirmPassword) {
      // used to put the error
      toast.error("password and confirm password should be same", toastOption);

      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than three character",
        toastOption
      );
      return false;
      // at that time you meet the condition get out
    } else if (password.length < 8) {
      toast.error(
        "Password should be  equal or greater than 8 characters",
        toastOption
      );
      return false;
    } else if (email === "") {
      toast.error("email is required ", toastOption);
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

      if (data.status === false) {
        toast.error(data.msg, toastOption);
      }

      // console.log(data);

      if (data.status === true) {


        toast.success("Account Created SuccessFully", toastOptionSuccess);
      }
    }
  };
  return (
    <>
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

    <ToastContainer></ToastContainer>

    </>
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
