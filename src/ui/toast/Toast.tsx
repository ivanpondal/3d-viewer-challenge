import React from "react";
import './Toast.css';

type ToastProps = {
    text: string
}

export const Toast = ({ text }: ToastProps) => {
    return <div className="toast">
        <p className="source-code-pro-font no-margin">{text}</p>
    </div>
}
