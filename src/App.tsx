import { Routes, Route, Outlet, Link } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { pagesData } from "./data/pagesData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<BasicProps />} /> */}
        {pagesData.map((page, index) => (
          <Route
          index={page.path === "/" ? true : false}
          path={page.path}
          element={<page.Element />} 
          />
        ))}
        <Route path="*" element={<h1>no elemennt</h1> } />
      </Route>
    </Routes>
  )
}

export default App;
