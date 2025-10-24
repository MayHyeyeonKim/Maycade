import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState("May");
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
