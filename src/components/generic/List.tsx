

// i don't do much comment because it basic knowlegde about generic

type ListProps<T> = {
    items:  T[];
    onClick: (value: T) => void;
}

type BaseTypeList = {
    id: number;
    data: string;
}

export const List = <T extends BaseTypeList>({items, onClick} : ListProps<T>) => {
    return(
        <div className="bg-white p-2 rounded shadow">
            <h2 className="text-xl font-bold">List of Items</h2>
            <ul className="list-disc list-inside">
                {items.map((item,index) => (
                    <li
                        key={item.id}
                        onClick={() =>onClick(item)}
                        className="px-2 rounded hover:bg-amber-100 active:bg-amber-200"
                    >
                        {item.data}
                    </li>
                ))}
            </ul>
        </div>
    )
}

