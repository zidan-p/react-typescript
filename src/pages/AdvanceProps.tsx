import { Heading } from "../components/Heading"
import { Oscar } from "../components/Oscar"
import { Status } from "../components/Status"

export const AdvanceProps = ()=>{

  return (
    <div className="">
    <div className="mx-auto max-w-3xl">
      <div className="">
        <h2 className='text-white text-xl'>Status</h2>
        <div className="flex gap-2 p-2">
          <Status status='loading' />
          <Status status='success' />
          <Status status='error' />
          <Status status='loading' />
        </div>
      </div>
      <div className="">
        <h2 className='text-white text-xl'>Heading</h2>
        <div className="bg-white rounded p-2 ml-2">
          <Heading>Hallo, ini adlah heading yang ada underlinenya</Heading>
        </div>
      </div>
      <div className="">
        <h2 className='text-white text-xl'>Heading + oscar</h2>
        <div className="bg-white rounded p-2 py-3 pt-5 ml-2">
          <Oscar>
            <Heading>Hallo, ini adlah heading yang ada underlinenya</Heading>
          </Oscar>
        </div>
      </div>
    </div>
  </div>
  )
}