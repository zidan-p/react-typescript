


// to building design system that reusable without relying on ui component library
// we can use wrap html. it is common to create basic element like button and input that
// pass special porps along with normal html.

import { Button } from "../components/html/Button"


export const WrappingHtml = () => {
    return(
        <div className="">
          <div className="mx-auto max-w-3xl">
            <div className="">
              <h2 className='text-white text-xl'>Wrapping HTML to make reusable element</h2>
              <div className="bg-white p-2 rounded shadow">
                <Button variant="primary" >
                    hello
                </Button>
              </div>
            </div>
          </div>
        </div>
    )
}