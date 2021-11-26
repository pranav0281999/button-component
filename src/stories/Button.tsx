import React, {useEffect} from 'react';
import './button.css';

interface ButtonProps {
    label: string;
    startIcon?: string;
    endIcon?: string;
    variant: "default" | "text" | "outline";
    disableShadow?: boolean;
    disable?: boolean;
    color: "default" | "primary" | "secondary" | "danger";
    size: "sm" | "md" | "lg";
}

export const Button = (
    {
        variant = "default",
        disable = false,
        color = "default",
        size = "md",
        ...props
    }: ButtonProps
) => {
    return (
        <button
            className={`button-style 
            button-variant-${variant} 
            ${props?.disableShadow && 'button-disable-shadow'} 
            button-size-${size} 
            button-color-${color}`}
            disabled={disable}
        >
            {
                props.startIcon && (
                    <p
                        className={`material-icons button-icon ${disable && 'p-button-disabled'}`}
                    >{props.startIcon}</p>
                )
            }
            <p
                className={`${disable && 'p-button-disabled'}`}
            >{props.label}</p>
            {
                props.endIcon && (
                    <p
                        className={`material-icons button-icon ${disable && 'p-button-disabled'}`}
                    >{props.endIcon}</p>
                )
            }
        </button>
    );
};
