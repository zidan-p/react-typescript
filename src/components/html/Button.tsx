

// i will make button that have variant
// but this button also have to accept props like ordinary html button.

import React from "react";

// we can do union with react component props to do that.
type ButtonProps = {
    variant: "primary" | "secondary";
    children: string;
} & Omit< // with omit, some of the manual defined type can still be initial type without unioning
    React.ComponentProps<"button">, // this will make all props that button have also acceptable in this component
    "children" 
>


export const Button = ({variant, children, ...rest} : ButtonProps) => {
    return(
        <button 
            className={
                variant === "primary" 
                ? "bg-gray-900 shadow px-3 p-1 rounded text-white hover:bg-gray-800 active:bg-gray-700"
                : "bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100"
            } 
            {...rest}
        >
            {children}
        </button>
    )
}