import { useEffect, useRef, useState } from "react"




export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const [timerState, setTimerState] = useState <"stop" | "play">("play");
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () =>{
        if(window && intervalRef.current){
            clearInterval(intervalRef.current)
            intervalRef.current = null;
        }
    }

    const playTimer = () => {
        if(window && intervalRef.current == null){
            intervalRef.current = window.setInterval(()=>{
                setTimer(time => time + 1);
            },1000)
        }
    }

    const handleTimerSTate = () => {
        // timer's state, not button state
        // so when time play, button stop
        // that's apply for stop
        if(timerState === "play") {
            setTimerState("stop");
            stopTimer();
        }else{
            setTimerState("play");
            playTimer();
        }
    }

    const reset = () => {
        setTimer(0);
    }

    useEffect(()=>{
        if(!window) return;
        // remenber to use window object.
        // typescript does't know if it server of client runtime
        playTimer();

        return () => {stopTimer()};
    },[])


    return (
        <div className="">
            <p className="text-gray-700 text-sm mb-2">timer using useRef</p>
            <div className="flex gap-2 mb-2">
                <button onClick={handleTimerSTate} className="bg-gray-900 shadow px-3 p-1 rounded text-white hover:bg-gray-800 active:bg-gray-700">
                    {timerState == "play" ? "stop" : "play"}
                </button>
                <button onClick={reset} className="bg-gray-300 shadow px-3 p-1 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100">
                    Reset
                </button>
            </div>
            <div className="bg-gray-100 rounded p-2">
                <h1 className="text-3xl font-bold ">{timer}</h1>
            </div>
        </div>
    )
}