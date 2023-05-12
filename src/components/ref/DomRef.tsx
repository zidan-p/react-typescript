import { useEffect, useRef } from "react"






export const DOmRef = () => {
    const inputRef = useRef<HTMLInputElement>(null); 
    //i don't know why it is allowed in ts 🤔, isn't HTML element and null different?
    //but whatever,, 

    useEffect(()=>{
        inputRef.current?.focus(); //it will make teh component alway focus first every render
    },[])

    return (
        <div className="">
            <input className="w-full px-3 py-1 focus-within:outline-amber-500" placeholder="when you change to this page, this input automatically focus" type="text" ref={inputRef} />
        </div>
    )
}