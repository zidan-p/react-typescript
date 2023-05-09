import { Routes, Route, Outlet, Link } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { pagesData } from "./data/pagesData";
import { BasicProps } from "./pages/BasicProps";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<BasicProps />} /> */}
        {pagesData.map((page, index) => (
          <Route
          index={page.path === "/" ? true : false}
          element={<page.Element />} 
          />
        ))}
        <Route path="*" element={<h1>no elemennt</h1> } />
      </Route>
    </Routes>
  )
}

export default App;
