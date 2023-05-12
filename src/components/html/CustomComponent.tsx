import { Greet } from "../Greet"




// it easy to extract component
// in any case you have a component but you doesn't know or have an access to it
// you can use this hack


export const CustomComponent = (props : React.ComponentProps<typeof Greet>) => {

    return(
        <div className="max-w-xl bg-white p-4 rounded hover:bg-gray-300">
            {props.logged
            ?(
                <span className="px-3 bg-green-200 rounded">Logged</span>
            ):(
                <span className="px-3 bg-red-200 rounded">Not Logged</span>
            )}
            <h1 className='text-3xl font-bold'>Hello {props.name}</h1>
            <p>you have {props.messageCount} unread messages!</p>
        </div>
    )
}