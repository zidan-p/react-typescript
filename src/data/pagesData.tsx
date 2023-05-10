import { FC } from "react";
import { AdvanceProps } from "../pages/AdvanceProps";
import { BasicProps } from "../pages/BasicProps";
import { EventProps } from "../pages/eventProps/EventProps";
import { StyleProps } from "../pages/styleProps/StyleProps";

type pagesDataType = {
    path: string;
    name: string;
    Element: FC;
}[];

export const pagesData : pagesDataType = [
    {
        path: "/",
        name: "basic props",
        Element : BasicProps  //not rendered
    },
    {
        path: "/advance-props",
        name: "advance props",
        Element : AdvanceProps
    },
    {
        path: "/event-props",
        name: "event props",
        Element: EventProps
    },
    {
        path: "/style-props",
        name: "style props",
        Element: StyleProps
    }
];