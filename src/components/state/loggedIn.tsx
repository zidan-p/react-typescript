import { useState } from "react"


//how to create simple looged state
// in this step, this state only save 1 key, that logged
// there are only 2 possible value, true or false.
// this is so simple



export const LoggedIn = () => {
    const [isLogged, setLogged] = useState(false); 
    // react is smart enough to infers the type of it state from initial value
    // once a state is create, it will be the state's type so on
    const handleLogin = () => {
        setLogged(true);
    }
    const handleLogout = () => {
        setLogged(false);
        // setLogged(0); // even js consider 0 as falsy value, typescript will prevent it to be in boolean value
    }
    return (
        <div className="bg-white p-2 rounded">
            <h2 className="text-3xl font-bold mb-2">
                User is 
                {isLogged ? (
                     <span className="text-green-700"> Log In</span>
                ):(
                     <span className="text-red-700"> Log Out</span>
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