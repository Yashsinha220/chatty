import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/index.css";

function Register() {
  const navigate = useNavigate();
  const [value , setvalue] = useState({
    username : "",
    email : "",
    password : "",
    confirmPassword : "",
  });


  const handlechange = (e)=>{
    setvalue({...value , [e.target.name] : e.target.value});
  }

  const handlesubmit =  async (e)=>{
    e.preventDefault();
    console.log(value);
    
  }
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
          handlesubmit(event)
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
          onChange={(e) => {handlechange(e)}}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => {handlechange(e)}}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {handlechange(e)}}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => {handlechange(e)}}
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
