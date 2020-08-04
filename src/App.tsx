import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import AppNavbar from "./components/AppNavbar";
import ChatRoom from "./pages/ChatRoom";
import UserContext from "./context/UserContext";
import { User } from "./model/User";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF--SiVW26GYBcbfYwTigX5jbycNCcZDM",
  authDomain: "fullstack-web-course.firebaseapp.com",
  databaseURL: "https://fullstack-web-course.firebaseio.com",
  projectId: "fullstack-web-course",
  storageBucket: "fullstack-web-course.appspot.com",
  messagingSenderId: "110015518895",
  appId: "1:110015518895:web:cb25b7d8e9f6efbae69c5a",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setCurrentUser(null);
      } else {
        const loggedInUser = {
          id: user.uid,
          displayName: user.displayName + "",
          imageURL: user.photoURL + "",
        };
        setCurrentUser(loggedInUser);
        firebase
          .firestore()
          .collection("users")
          .doc(loggedInUser.id)
          .set(loggedInUser)
          .then();
      }
    });
  }, []);
  return (
    <div>
      <UserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          logout: () => setCurrentUser(null),
        }}
      >
        <AppNavbar />
        <Container>
          <ChatRoom />
        </Container>
      </UserContext.Provider>
    </div>
  );
}

export default App;
