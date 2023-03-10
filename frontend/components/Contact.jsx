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
  console.log(contacts);

  return (
    <>
      {currentUserName && (
        <div style={{ border: "2px solid red", flex: 1 }}>
          <div className="brand">
            <img src={""} alt="" />
            <h1 style={{ color: "white", textAlign: "center" }}>Chatty</h1>
          </div>

          <div className="contacts">
            
            {contacts.map((contact, index) => {
              return(
                <div
                className={`contacty ${
                  index === currentSelected ? "selectd" : ""
                }`}
                key={index}
              >
                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
