import { ButtonProps } from "./button.interface";

const Button: React.FC<ButtonProps> = ({ text,customStyle,type,onClick }) => {
  return (
      <button onClick={onClick} type={type} className={`${customStyle} `}>{text}</button>
  );
};

export default Button;
