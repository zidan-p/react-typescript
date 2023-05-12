import { Sidebar } from "../components/Sidebar"
import { pagesData } from "../data/pagesData"
import { Outlet} from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="basis-1/6 h-screen overflow-auto">
        <Sidebar routes={pagesData}/>
      </aside>
      <main className="basis-5/6  relative min-h-screen bg-gray-900">
        <Outlet />
      </main>
    </div>
  )
}

