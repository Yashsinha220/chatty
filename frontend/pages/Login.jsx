import React from "react";
// import '../src/index.css'
import { Link, useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios'
import { loginRoute } from "../utils/ApiRoutes";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function Login() {
  const navigate = useNavigate();
  const [value , setvalue] = useState({
    email : '',
    password : '',
  
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

  useEffect (()=>{

    if(localStorage.getItem('chat-app-user')){
      navigate('/')
    }

  }, []);

  const handlechange = (e)=>{
    setvalue({...value ,[e.target.name] : e.target.value});
  }

  const handlesubmit = async (e)=>{
    e.preventDefault();


    try {
      const {email  , password} = value

      const {data } =  await axios.post(loginRoute, {
        email : email,
        password : password
      });

      if(data.status == false){
        toast.error(data.msg , toastOption);
      }

      if(data.status == true){
        toast.success(data.msg , toastOptionSuccess)
        var dataTOstore = JSON.stringify(data);
        localStorage.setItem('chat-app-user' , dataTOstore);
        navigate('/');
      }


      
    } catch (error) {
      
    }
  }


  return (

    <>
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

    <ToastContainer></ToastContainer>

    </>
  );
}

export default Login;
