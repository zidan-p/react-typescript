//example using react event props as type

import React from "react";

//here use click element
type FancyButtonProps = {
    onClick : (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactElement | string | number
}


export const FancyButton = (props: FancyButtonProps) => {
    const handleCLick = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert("hallo, and amengeklik ini");
        props.onClick(e);
    }

    return (
        <button 
        className="transition px-3 py-1 bg-gray-900 text-white rounded shadow-2xl hover:bg-gray-800 active:shadow-none active:bg-gray-700 "
            onClick={handleCLick}
        >
            {props.children}
        </button>
    )
}