import { AdvanceProps } from "../pages/AdvanceProps";
import { BasicProps } from "../pages/BasicProps";



export const pagesData = [
    {
        path: "/",
        name: "basic props",
        Element : BasicProps  //not rendered
    },
    {
        path: "/advance-props",
        name: "advance props",
        Element : AdvanceProps
    }
];