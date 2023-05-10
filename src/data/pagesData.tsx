import { FC } from "react";
import { AdvanceProps } from "../pages/AdvanceProps";
import { BasicProps } from "../pages/BasicProps";
import { EventProps } from "../pages/eventProps/EventProps";

type pagesDataType = {
    path: string;
    name: string;
    Element: FC;
}[];

export const pagesData : pagesDataType = [
    {
        path: "/",
        name: "1. basic props",
        Element : BasicProps  //not rendered
    },
    {
        path: "/advance-props",
        name: "2. advance props",
        Element : AdvanceProps
    },
    {
        path: "/event-props",
        name: "3. event props",
        Element: EventProps
    }
];