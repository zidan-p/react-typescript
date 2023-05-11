import React, {useState, createContext} from "react"

export type AuthUser = {
    name: string;
    email: string;
}

// this will prevent typescript error when passing value setUser
// i get this type from typescript intellisense
type UserContextType = {
    user: AuthUser | null;
    setUser : React.Dispatch<React.SetStateAction<AuthUser | null>>;
}


type UserContextProviderProps = {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null); //here i don't know why would it have to be bull


export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

