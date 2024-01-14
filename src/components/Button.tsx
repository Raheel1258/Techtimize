import React, { FC } from "react";

interface ButtonProps {
  text: string;
  className: string;
  icon: any;
  onClick: any;
}

const Button: FC<ButtonProps> = ({ text, className, icon, onClick }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      <p>{text}</p>
      {icon && <div>{icon}</div>}
    </button>
  );
};

export default Button;
