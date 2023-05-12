import { DOmRef } from "../components/ref/DomRef"
import { MutableRef } from "../components/ref/MutableRef"




export const UseRefHook = () => {
    return(
        <div className="">
          <div className="mx-auto max-w-3xl">
            <div className="">
              <h2 className='text-white text-xl'>using useRef with input</h2>
              <div className="bg-white p-2 rounded">
                <DOmRef />
              </div>
            </div>
            <div className="">
              <h2 className='text-white text-xl'>Timer using useRef</h2>
              <div className="bg-white p-2 rounded">
                <MutableRef />
              </div>
            </div>
          </div>
        </div>
    )
}