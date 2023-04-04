import React, { useState, useEffect } from "react";

function Contact({ contacts, currentUser }) {
  const [currentUserName, setcurrentUserName] = useState(undefined);
  const [currentSelected, setcurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setcurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentchat = (index, contact) => {};
  // console.log(contacts);

  return (
    <>
      {currentUserName && (
        <div style={{ backgroundColor: "#080420", flex: 1 }}>
          <div
            className="brand"
            style={{
              marginBottom: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              padding : 15
            }}
          >
            {/* <img src={""} alt="" /> */}
            <h1
              style={{
                color: "white",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Chatty
            </h1>
          </div>

          <div
            className="contacts"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "auto",
              gap: "0.8rem",
              height : '90%',
            }}
          >
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contacty ${
                    index === currentSelected ? "selectd" : ""
                  }`}
                  style={{
                    backgroundColor: "#ffffff39",
                    textAlign: "center",
                    minHeight: "4rem",
                    width: "95%",
                    display : 'flex',
                    alignItems: "center",
                    // justifyContent: "center",
                    cursor : "pointer",
                    // borderRadius : 20,
                    padding : 10,
                    transition : '0.5s ease-in-out',
                  }}
                  key={index}
                >
                  <div style={{
                  background : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU')",
                  width : "50px",
                  height :"50px",
                  backgroundSize : 'cover',
                  backgroundRepeat : 'no-repeat',
                  borderRadius : '50%',
                  padding : '10px',
                  marginRight : '20px',
                  margin : '10px',

                  
                  }}>

                  </div>
                  <div className="username">
                    <h3 style={{ color: "white" , fontStyle : 'oblique'   }}>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
