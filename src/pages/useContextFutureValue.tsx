import { User } from "../components/context/User"
import { UserContextProvider } from "../components/context/UserContext"



export const UseContextFutureValue = () => {
    return(
      <div className="">
        <div className="mx-auto max-w-3xl">
          <div className="">
            <h2 className='text-white text-xl'>using useContex hook</h2>
            <UserContextProvider>
                <User />
            </UserContextProvider>
          </div>
        </div>
      </div>
    )
}