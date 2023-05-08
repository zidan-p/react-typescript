type PersonProps = {
    name: {
        first: string;
        last: string;
    }
}


export const Person = (props: PersonProps) => {
    return(
        <div className="bg-white rounded p-2">
            <table className="">
                <tbody>
                    <tr>
                        <td className="border-y p-1 px-2 text-gray-700">First Name</td>
                        <td className="border-y p-1 px-2 text-right" >{props.name.first}</td>
                    </tr>
                    <tr>
                        <td className="border-y p-1 px-2 text-gray-700">Last Name</td>
                        <td className="border-y p-1 px-2 text-right">{props.name.last}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}