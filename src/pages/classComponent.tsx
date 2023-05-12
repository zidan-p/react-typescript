import { Counter } from "../components/class/Counter"



export const ClassComponent = () => {
    return(
        <div className="">
          <div className="mx-auto max-w-3xl">
            <div className="">
              <h2 className='text-white text-xl'>Counter using class component</h2>
              <Counter message="hello this is messaages from props in react class component with typescript" />
            </div>
          </div>
        </div>
    )
}