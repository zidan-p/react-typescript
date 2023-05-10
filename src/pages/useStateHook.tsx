import { LoggedIn } from "../components/state/loggedIn"



export const UseStateHook = () => {
    return(
      <div className="">
        <div className="mx-auto max-w-3xl">
          <div className="">
            <h2 className='text-white text-xl'>using useState hook</h2>
            <LoggedIn />
          </div>
        </div>
      </div>
    )
}