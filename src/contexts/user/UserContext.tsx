import { createContext } from "react";
import type { UserContextType } from "./UserTypes";

export const UserContext = createContext<UserContextType>({
  userName: "",
  setUserName: () => {},
});
