import React from "react";
import { InputProps } from "./input.interface";

export const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  customStyle,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={customStyle}
      value={value}
      onChange={onChange}
    />
  );
};
