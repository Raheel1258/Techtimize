import React, { FC } from "react";

interface ButtonProps {
  text?: string;
  textClass?:string
  className?: string;
  icon?: any;
  onClick?: any;
}

const Button: FC<ButtonProps> = ({ text, className, icon, onClick,textClass }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      <p className={`${textClass} satoshi-medium`}>{text}</p>
      {icon && <div>{icon}</div>}
    </button>
  );
};

export default Button;
