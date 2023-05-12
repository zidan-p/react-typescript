import { RandomNumber } from "../components/restriction/RandomNumber"






export const RestrictingProps = () => {
    return(
        <div className="">
          <div className="mx-auto max-w-3xl">
            <div className="">
              <h2 className='text-white text-xl'>Restrcition props</h2>
              <RandomNumber value={10} isPositive />
            </div>
          </div>
        </div>
    )
}