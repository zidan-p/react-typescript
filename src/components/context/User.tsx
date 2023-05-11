import {useState, useContext} from "react"
import { UserContext } from "./UserContext";


export const User = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name : "zidan",
                email : "zidanputrarahman153@Gmail.com"
            })
        }
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null);
        }
    }
    return (
        <div className="bg-white p-2 rounded">
            <h2 className="text-3xl font-bold mb-2">
            {userContext?.user !== null ? (
                <div className="bg-gray-100 rounded p-2">
                    <h1 className="text-3xl font-bold ">{userContext?.user.name}</h1>
                    <p className="text-gray-400 text-sm">{userContext?.user.email}</p>
                </div>
            ):(
                <div className="bg-red-100 text-red-400 rounded p-2">
                    Log Out (null)
                </div>
            )}
            </h2>
            <p className="text-gray-700 text-sm mb-2">this is simple logg in / log out project. use buttons bellow to change it value</p>
            <div className="flex gap-2">
                <button onClick={handleLogin} className="bg-gray-900 shadow px-3 p-1 rounded text-white hover:bg-gray-800 active:bg-gray-700">
                    login
                    </button>
                <button onClick={handleLogout} className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100">
                    Logout
                </button>
            </div>
        </div>
    )
}