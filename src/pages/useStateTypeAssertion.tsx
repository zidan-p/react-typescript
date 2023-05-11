import { UserTypeAssertion } from "../components/state/userTypeAssertion"



export const UseStateTypeAssertion = () => {
    return(
      <div className="">
        <div className="mx-auto max-w-3xl">
          <div className="">
            <h2 className='text-white text-xl'>using useState hook</h2>
            <UserTypeAssertion />
          </div>
        </div>
      </div>
    )
}