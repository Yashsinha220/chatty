import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getallUserRoute } from "../utils/ApiRoutes";
import Contact from "../components/Contact";

function MainChat() {
  const navigate = useNavigate();
  const [contacts, setcontacts] = useState([]);
  const [currentUser, setcurrentUser] = useState(undefined);

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    } else {
      (async () => {
        setcurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
      })();
      // imediate invoke function call
    }
  }, []);

  useEffect(() => {
    // when the component is created we call this one

    if (currentUser) {
      (async () => {
        const {data} = await axios.get(`${getallUserRoute}/${currentUser.id}`);
        setcontacts(data.users);
        // console.log(data);
        // console.log(contacts);
      })();
    }
  }, [currentUser]);
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "colum",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#131324",
      }}
    >
      {/* one is the contact and the chat container */}
      <div
        style={{
          height: "80vh ",
          width: "80vw",
          backgroundColor: "#00000076",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Contact contacts = {contacts} currentUser = {currentUser}></Contact>

        {/* this is the main container */}
        
        <div style={{display : 'flex' , flex : 2}}> </div>
      </div>
    </div>
  );
}

export default MainChat;
