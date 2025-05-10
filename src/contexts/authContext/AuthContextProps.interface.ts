// authContextProps.interface.ts
import { Dispatch, SetStateAction } from "react";

export interface User {
  id?: string;
  name?: string;
  email?: string;
  // Add other user properties as needed
}

export interface AuthContextProps {
  webAccessToken: string;
  setWebAccessToken: Dispatch<SetStateAction<string>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}