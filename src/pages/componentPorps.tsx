import { useState } from "react"
import { Private } from "../components/auth/Private"
import { Profile } from "../components/auth/Profile"





export const ComponentProps = () => {
    const [isLogin, setIslogin] = useState(false);



    return(
        <div className="">
          <div className="mx-auto max-w-3xl">
            <div className="">
              <h2 className='text-white text-xl'>Component props</h2>
              <div className="bg-white p-2 rounded">
                <button 
                    onClick={() => {setIslogin(!isLogin)}} 
                    className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100"
                >
                    {isLogin ? "Logout" : "Login"}
                </button>
                <Private isLogin={isLogin} component={Profile} />
              </div>
            </div>
          </div>
        </div>
    )
}