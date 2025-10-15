import React, { useState } from "react";
import { LevelContext } from "./LevelContext";

export const LevelProvider = ({ children }: { children: React.ReactNode }) => {
  const [level, setLevel] = useState("Easy");
  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};
