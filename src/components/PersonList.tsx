type PersonListProps = { 
    names: {
        first: string;
        last: string;
    }[] // this is how to use array of object as type
}

export const PersonList = (props: PersonListProps)=>{
    return(
        <div className="bg-white rounded p-3 max-w-xl ml-2">
            <ul>
                {props.names.map((person, index) => (
                    <li 
                        className="py-1 px-2 list-disc list-inside hover:bg-gray-200" 
                        key={index}
                    >
                        {person.first} - {person.last}
                    </li>
                ))}
            </ul>
        </div>
    )
}