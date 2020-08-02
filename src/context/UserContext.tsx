import React from "react";
import { User } from "../model/User";

interface UserContextStruct {
  currentUser: User | null,
  setCurrentUser: (user: User) => void,
  logout: () => void,
}

const UserContext = React.createContext<UserContextStruct>({
  currentUser: null,
  setCurrentUser: (user: User) => {},
  logout: () => {},
});

export default UserContext;