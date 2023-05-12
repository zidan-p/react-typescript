import { Component, ReactNode } from "react";


type CounterType = {
    count: number;
}

type CounterProps = {
    message: string;
}


// when you add props and state in this class
// don't forget to use those props type in class parameter type
// <MyProps, MyState>
export class Counter extends Component <CounterProps, CounterType> {

    difference = 10;
    state: CounterType = { count : 0 }


    // NOTE : it error when these method is directly call in onClick
    // so remember to use wrapper function before calling thesee method
    handleIncrement(){
        this.setState((prevState)=>({count: prevState.count + this.difference}))
    }
    handledecrement(){
        this.setState((prevState)=>({count: prevState.count - this.difference}))
    }
    handleReset(){
        this.setState({count : 0})
    }

    render() {
        return(
            <div className="bg-white p-2 rounded">
            <p className="tex-sm text-gray-600">use typescript witn class in react</p>
            <p className="bg-gray-100 rounded px-2 py-0.5">{this.props.message}</p>
            <h1 className="text-3xl font-bold mb-2">{this.state.count}</h1>
            <div className="flex gap-3">
                <button 
                    onClick={() => this.handleIncrement()} // here <----, don't forget to add wrapper function
                    className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100"
                >
                    + {this.difference}
                </button>
                <button 
                    onClick={() => this.handledecrement()} // <----
                    className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100"
                >
                    - {this.difference}
                </button>
                <button 
                    onClick={() => this.handleReset()} // <----
                    className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100"
                >
                    Reset
                </button>
            </div>
            
        </div>
        )
    }
}