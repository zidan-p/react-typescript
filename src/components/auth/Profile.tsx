
export type ProfileProps = {
    name: string;
    email: string;
}


export const Profile = ({name, email}: ProfileProps) => {
    return (
        <div className="">
            <div className="text-xs text-gray-600 mb-2">
                <h1>Private Profile</h1>
                <p>this private profile only contain some data and not so much</p>
            </div>
            <div className="">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-gray-600">{email}</p>

            </div>
        </div>
    )
}