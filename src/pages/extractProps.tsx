import { CustomComponent } from "../components/html/CustomComponent"




export const ExtractProps = () => {
    return (
        <div className="">
          <div className="mx-auto max-w-3xl">
            <div className="">
              <h2 className='text-white text-xl'>extract props from another component</h2>
              <div className="flex flex-col gap-2">
                <CustomComponent  
                    name='Hadi'
                    messageCount={10} 
                    logged={true}
                />
                <CustomComponent  
                    name='Hadi'
                    messageCount={19} 
                    logged={false}
                />
                <CustomComponent  
                    name='Ajit'
                    messageCount={10} 
                    logged={true}
                />
              </div>
            </div>
          </div>
        </div>
    )
}