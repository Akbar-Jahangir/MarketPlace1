import React from "react";

export interface ButtonProps {
    text: string | React.ReactNode;
    onClick?: () => void;
    customStyle?: string;
    type?: "button" | "submit" | "reset";

}