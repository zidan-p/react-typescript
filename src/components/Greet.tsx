// how to use type
export type GreetProps = {
    name: string;
}


export const Greet = (props: GreetProps) => {
    return (
    <div className="max-w-xl bg-white p-4 rounded hover:bg-gray-300">
        <h1 className='text-3xl font-bold'>Hello {props.name}</h1>
        <p>this is an component that defined</p>
    </div>
    )
}


