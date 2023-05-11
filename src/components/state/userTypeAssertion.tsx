import { useEffect, useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}

// use type assertion when always confident if tye user value always be create when this compoennt attached.
// when use this thing, i can directly use user properties without using optional chaining or chekking it value first


export const UserTypeAssertion = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);  // here how to do it
    // useEffect(()=>{
    //     handleLogin();
    // },[])
    const handleLogin = () => {
        setUser({
            name: "zidan",
            email: "zidanputrarahman153@Gmail.com"
        });
    }
    return (
        <div className="bg-white p-2 rounded">
            <p className="text-gray-700 text-sm mb-2">this is simple logg in / log out project. it doesn;t show anything because it purpose is only to show how typescript work in code</p>
            <div className="bg-gray-100 rounded p-2">
                <h1 className="text-3xl font-bold ">{user.name}</h1>
                <p className="text-gray-400 text-sm">{user.email}</p>
            </div>
        </div>
    )
}