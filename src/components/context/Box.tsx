import {useContext, useState} from "react";
import { ThemeContext } from "./ThemeContext";



export const Box = () => {
    const [themeSelected, setThemeSelected] = useState<"primary" | "secondary">("primary");

    const handleClick = () => {
        if(themeSelected === "primary"){
            setThemeSelected("secondary");
        }else{
            setThemeSelected("primary");
        }
    }

    const theme = useContext(ThemeContext)

    return(
        <div className="">
            <button 
                onClick={handleClick}
                className="bg-gray-300 shadow px-3 p-1 mb-2 rounded text-gray-900 hover:bg-gray-200 active:bg-gray-100"
            >
                Change theme

            </button>
            {/* this is the box */}
            <div className={theme[themeSelected].Background}>
                <h1 className={theme[themeSelected].text1}>Heading</h1>
                <p className={theme[themeSelected].text2}>this is some sentence to fill this empty pharagraph</p>
            </div>
        </div>
    )
}