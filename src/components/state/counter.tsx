import {useReducer} from "react"


// useReducer is used when working with complex computation and every process need value from preview proccess
// hore how to do useReduccer

const initialState = { count: 0}

type CounterState = {
    count: number;
}

type UpdateAction = {
    payload: number;
    type: "increment" | "decrement";
}

// it will make typescript chech
// if type is reset then we don't use payload
type ResetAction = {
    type : "reset"
}

type CounterAction = UpdateAction | ResetAction;


function reducer(state : CounterState, action : CounterAction) : CounterState{
    switch(action.type){
        case "increment":
            return {count : state.count + action.payload}
            break;
        case "decrement" : 
            return {count : state.count - action.payload}   
            break
        case "reset" : 
            return initialState;
            break;
        default:
            return state;
    }
}


export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="bg-white p-2 rounded">
            <p className="tex-sm text-gray-600">this is simple use case of useReducer in react. i create this with typescript</p>
            <h1 className="text-3xl font-bold mb-2">{state.count}</h1>
            <div className="flex gap-3">
                <button 
                    onClick={()=>dispatch({payload: 10, type:"increment"})} 
                    className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100"
                >
                    + 10
                </button>
                <button 
                    onClick={()=>dispatch({payload: 10, type:"decrement"})} 
                    className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100"
                >
                    - 10
                </button>
                <button 
                    onClick={()=>dispatch({type:"reset"})} 
                    className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}