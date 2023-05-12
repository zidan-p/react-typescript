import { Toast } from "../components/templateLiteral/Toast"





export const TemplateLiteral = () => {

    return(
        <div className="">
          <div className="mx-auto max-w-3xl">
            <div className="">
              <h2 className='text-white text-xl'>Template literal and how to excluding</h2>
              <Toast position="center"/>
              <Toast position="center-top"/>
              <Toast position="center-bottom"/>
              <Toast position="left-bottom"/>
              <Toast position="center"/>
            </div>
          </div>
        </div>
    )
}