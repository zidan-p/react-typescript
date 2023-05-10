//here how to use styled props

// import React from "react";

type ContainerProps = {
    styles : React.CSSProperties; 
    //this type make typescript to make only valid css properties that can be assigned
    // children : React.ReactElement;
}


export const Container = (props : ContainerProps) => {
    return (
        <div style={props.styles}>
            this is an example of a pharagraph.
            try to change it with react style properties
        </div>
    )
}