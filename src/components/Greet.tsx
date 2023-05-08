// how to use type
export type GreetProps = {
    name: string;
    messageCount: number;
    logged: boolean;
}


export const Greet = (props: GreetProps) => {
    return (
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


