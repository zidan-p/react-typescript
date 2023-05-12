import { List } from "../components/generic/List"




export const GenericProps = () => {
    return(
        <div className="">
            <div className="mx-auto max-w-3xl">
                <div className="">
                    <h2 className='text-white text-xl'>Generic props</h2>
                    <List 
                        items={[
                            {
                                id: 1,
                                data: "zidan",
                                email: "zidanputrarahman153@gmail.com"
                            },
                            {
                                id: 2,
                                data: "mbeeerrr",
                                email: "zidanputrarahman153@gmail.com"
                            },
                        ]}

                        onClick={(value) => console.log(value)}
                    />
                </div>
            </div>
        </div>
    )
}