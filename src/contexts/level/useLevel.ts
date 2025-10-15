import { useContext } from "react";
import { LevelContext } from "./LevelContext";
import type { LevelContextType } from "./LevelTypes";

export const useLevel = (): LevelContextType => {
  const context = useContext(LevelContext);
  if (!context) throw new Error("useLevel must be used within a LevelProvider");
  return context;
};
