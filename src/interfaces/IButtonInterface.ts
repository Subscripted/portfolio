import React from "react";

type ButtonType = "button" | "submit" | "reset";

export interface IButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    type?: ButtonType;
    className?: string;
}
