import React, { useState, useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import firebase from "firebase/app";
import UserContext from "../context/UserContext";

const AppNavbar = () => {
  const [show, setShow] = useState(false);
  const userContext = useContext(UserContext);
  const handleClose = () => {
    setShow(false);
  };
  const uiConfig = {
    signInSuccessUrl: "",
    siteName: "Chat",
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: (result: any) => {
        setShow(false);
        return false;
      },
    },
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
  }

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" className="text-white">
          Chat
        </Navbar.Brand>
        <div className="justify-content-end">
          {!userContext.currentUser && (
            <Button
              onClick={() => setShow(true)}
              variant="link"
              className="text-white"
            >
              Connect
            </Button>
          )}
          {userContext.currentUser && (
            <Button onClick={handleSignOut} variant="link" className="text-white">
              Sign out
            </Button>
          )}
        </div>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please login to send a message</p>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AppNavbar;
