import React from "react";
import './Button.css';

type ButtonProps = {
    text: string;
    onClick: () => void
}

export const Button = ({ text, onClick }: ButtonProps) =>
    <button className="button source-code-pro-font" type="button" onClick={onClick}>{text}</button>