import React, { createContext, useState } from "react";
import { AuthContextProps, User } from "./authContextProps.interface";
import { ContextProviderProps } from "../../interfaces/contextProviderProps.interface";

// Create a default value for context
const defaultAuthContext: AuthContextProps = {
  webAccessToken: "",
  setWebAccessToken: () => {},
  user: null,
  setUser: () => {},
};

// Create context with a default non-null value
export const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

export const AuthProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [webAccessToken, setWebAccessToken] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ webAccessToken, setWebAccessToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};