import { Container } from "./components/Container"





export const StyleProps = () => {
    return (
        <div className="">
            <div className="mx-auto max-w-3xl">
                <div className="">
                    <h2 className='text-white text-xl'>Styled props</h2>
                    <Container styles={{
                        backgroundColor: "white",
                        padding : "2px 5px",
                        borderRadius : "5px"
                        }} 
                    />
                </div>
            </div>
        </div>
    )
}



