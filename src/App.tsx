import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import AppNavbar from "./components/AppNavbar";
import ChatRoom from "./pages/ChatRoom";
import UserContext from "./context/UserContext";
import { User } from "./model/User";

const mockUser: User = {
  id: "robertdeniro",
  displayName: "Robert De Niro",
  imageURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a_irm_Mz7KZ5hAVhLXeepAHaEK%26pid%3DApi&f=1",
};

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(mockUser);
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
