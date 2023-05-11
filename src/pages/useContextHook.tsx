import { Box } from "../components/context/Box"
import { ThemeContextProvider } from "../components/context/ThemeContext"



export const UseContextHook = () => {
    return(
      <div className="">
        <div className="mx-auto max-w-3xl">
          <div className="">
            <h2 className='text-white text-xl'>using useContext hook</h2>
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
          </div>
        </div>
      </div>
    )
}