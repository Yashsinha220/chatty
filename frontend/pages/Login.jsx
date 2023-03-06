import React from "react";
// import '../src/index.css'
import { Link } from "react-router-dom";
imp

function Login() {


 
  return (
    <div style={{
      height : "100vh",
      width : '100vw',
      display : 'flex',
      flexDirection: 'column',
      justifyContent : 'center',
      alignItems : 'center',
      gap: '1rem',
      backgroundColor : '#131324'
    }}>
      <form
        onSubmit={(e) => {
          handlesubmit(e);
        }}

        style = {{
          display : 'flex',
          flexDirection : 'column',
          gap : '2rem',
          backgroundColor: "#00000076",
          borderRadius: "2rem",
          padding: "3rem 5rem",
        }}
      >
        <div  style={ {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}>
          <h1 style={{color : 'white' , textTransform : 'uppercase'}}>Chatty</h1>
        </div>

        <input
          type="email"
          name="emai"
          placeholder="email"
          onChange={(e) => {
            handlechange(e);
          }}
          autoComplete="on"
        />

        <input
          type="password"
          name="password"
          autoComplete="on"
          onChange={(e) => {
            handlechange(e);
          }}
          placeholder = 'password'
        />

        <button type="submit">Login</button>

        <span>
          Don't have an account ?  <Link to={"/register"}> Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
