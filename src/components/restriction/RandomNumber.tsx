



// the idea from this step is to make a value must be present in props
// but if only one from isPositive, isNegative and isZero that only be present
// it have to be error when more than two value from those that present

// here i can use union to do this approach


type RandomNumberType = {
    value: number;
    // isPositive?: boolean;
    // isNegative?: boolean;
    // isZero?: boolean;
}

// here how to do union
type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    //bellow sytax is to make sure it value never be defined
    isNegative?: never;
    isZero?: never;
}

type NegativeNumber = RandomNumberType & {
    isPositive?: never ;
    isNegative: boolean;
    isZero?: never;
}

type Zero= RandomNumberType & {
    isPositive?: never ;
    isNegative?: never;
    isZero: boolean;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
    return (
        <div className="bg-white p-2 rounded shadow">
            <h1 className="text-3xl font-bold">{value} 
            <span className="text-base font-normal text-gray-600"> 
                {isPositive &&
                    " is positive"
                }
                {isNegative &&
                    " is negative"
                }
                {isZero &&
                    " is zero"
                }
            </span>
            </h1>
        </div>
    )
}