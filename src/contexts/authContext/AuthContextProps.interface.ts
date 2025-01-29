import { Dispatch, SetStateAction } from "react";

export interface AuthContextProps {
  webAccessToken: string;
  setWebAccessToken: Dispatch<SetStateAction<string>>;
}
