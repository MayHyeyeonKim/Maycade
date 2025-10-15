import { createContext } from "react";
import type { LevelContextType } from "./LevelTypes";

export const LevelContext = createContext<LevelContextType | undefined>(
  undefined
);
