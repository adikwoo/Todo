import React from "react";
import * as Styled from "./Button.styles";

interface ButtonProps {
  onClick: () => void;
  text: string;
  href?: string;
  disabled?: boolean;
  color?: "red" | "green";
  children?: any;
  width?:string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  disabled,
  children,
  color,
}) => {
  const handleClick = () => {
    onClick();
  };

  const buttonContent = (
    <>
      {children && <div className="children-content">{children}</div>}

      <div className="text-link">{text}</div>
    </>
  );

  
  return (
    <Styled.ContainedButtonContainer>
      <Styled.ContainedLink
        aria-disabled={disabled}
        onClick={handleClick}
        color={color}
        className={`${color} ${disabled && "disabled"} `}
      >
        {buttonContent}
      </Styled.ContainedLink>
    </Styled.ContainedButtonContainer>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
