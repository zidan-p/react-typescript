
// there are 2 most frequently used event interface.
// click event in buttin and chane event in input

import { FancyButton } from "./components/FancyButton"
import { FancyInput } from "./components/FancyInput"

export const EventProps = ()=> {
    return(
        <div className="">
            <div className="mx-auto max-w-3xl">
                <div className="">
                    <h2 className='text-white text-xl'>click button</h2>
                    <div className="bg-white rounded p-2">
                        <div className="mb-2">
                            <FancyInput />
                        </div>
                        <FancyButton onClick={(e)=>console.log("clicked in")} >
                            Click me
                        </FancyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}