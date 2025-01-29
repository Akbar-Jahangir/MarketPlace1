import React from "react";
import { LabelProps } from "./Label.interface";

const Label: React.FC<LabelProps> = ({ text, customestyles }) => {
  return (
    <>
      <p className={`font-Montserrat text-lg ${customestyles}`}>{text}</p>
    </>
  );
};

export default Label;
