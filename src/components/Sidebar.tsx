import { FC } from "react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  routes: {
    path: string;
    name: string;
    Element: FC;
  }[];
};

export const Sidebar = (porps: SidebarProps) => {
  return (
    <div className="bg-gray-800 text-white ">
      <h1 className="p-1 px-2 text-lg font-semibold">Tutorial Page list</h1>
      <div className="">
        <ul className="flex flex-col p-1">
          {porps.routes.map((route, index) => (
            <li className="">
              <NavLink
                to={route.path}
                className={({ isActive, isPending }) => {
                  let activeClass = isActive
                    ? "text-white underline decoration-amber-600 underline-offset-8"
                    : "text-gray-500";

                  return (
                    `hover:bg-gray-700 w-full px-2 py-1 rounded block ` +
                    activeClass
                  );
                }}
              >
              {index + 1}.  {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


