import { LevelProvider } from "./level/LevelProvider";
import { UserProvider } from "./user/UserProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <LevelProvider>{children}</LevelProvider>
    </UserProvider>
  );
};
