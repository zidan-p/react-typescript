

// we can use string literal to combine value to make value that we need
// when create string literal wen can also exclude som value that did't want

// positionon that can be one of
// "left-center"    | "left-top"        | "left-bottom"     | 
// "center"         | "center-top"      | "center-bottom"   |
// "right-center"   | "right-top"       | "right-bottom"

type HorizontalPositiion = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

// the exclude make center center not allowed
type ToastProps = {
    position : 
        Exclude<`${HorizontalPositiion}-${VerticalPosition}`, "center-center">
        | "center"
}


export const Toast = ({position}: ToastProps) => {

    return(
        <div className="bg-white px-3 py-1 rounded shadow mb-1">
            Toast Notification position -
            <span className="bg-amber-100 px-2 rounded"> {position} </span>
        </div>
    )
}