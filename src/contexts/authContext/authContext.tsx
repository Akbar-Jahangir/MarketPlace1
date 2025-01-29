import React, { createContext, useState } from "react";
import { AuthContextProps } from "./AuthContextProps.interface";
import { ContextProviderProps } from "../../interfaces/ContextProviderProps.interface";

// Create a default value for context
const defaultAuthContext: AuthContextProps = {
  webAccessToken: "",
  setWebAccessToken: () => {},
};

// Create context with a default non-null value
export const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

export const AuthProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [webAccessToken, setWebAccessToken] = useState<string>("");
  return (
    <AuthContext.Provider value={{ webAccessToken, setWebAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
