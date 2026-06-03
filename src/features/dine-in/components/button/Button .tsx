import "./Button.css";

import type { MouseEventHandler, ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}
const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md",
  disabled = false,
  className = "",
  type = "button"
}: ButtonProps) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  );
};



export default Button;