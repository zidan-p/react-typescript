import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}

// here how to make state can contain 2 different type with parameterized type
// so i can make state container first then assign it with value later


export const User = () => {
    // use parameterized type
    const [user, setUser] = useState<null | AuthUser>(null); 
    const handleLogin = () => {
        setUser({
            name: "zidan",
            email: "zidanputrarahman153@Gmail.com"
        });
    }
    const handleLogout = () => {
        setUser(null);
    }
    return (
        <div className="bg-white p-2 rounded">
            <p className="text-gray-700 text-sm mb-2">this is simple logg in / log out project. use buttons bellow to change it value</p>
            <div className="flex gap-2 mb-2">
                <button onClick={handleLogin} className="bg-gray-900 shadow px-3 p-1 rounded text-white hover:bg-gray-800 active:bg-gray-700">
                    login
                    </button>
                <button onClick={handleLogout} className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100">
                    Logout
                </button>
            </div>
            {user === null ? (
                <div className="bg-red-100 text-red-400 rounded p-2">
                    Log Out (null)
                </div>
            ):(
                <div className="bg-gray-100 rounded p-2">
                    <h1 className="text-3xl font-bold ">{user.name}</h1>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
            )}
        </div>
    )
}