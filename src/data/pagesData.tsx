import { FC } from "react";
import { AdvanceProps } from "../pages/AdvanceProps";
import { BasicProps } from "../pages/BasicProps";
import { EventProps } from "../pages/eventProps/EventProps";
import { StyleProps } from "../pages/styleProps/StyleProps";
import { LoggedIn } from "../components/state/loggedIn";
import { UseStateHook } from "../pages/useStateHook";
import { UseStateFutureValue } from "../pages/useStateFutureValue";
import { UseStateTypeAssertion } from "../pages/useStateTypeAssertion";
import { UseReducerHook } from "../pages/useReducerHook";

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
    },
    {
        path: "/use-hook-one",
        name: "using usestate 1",
        Element: UseStateHook
    },
    {
        path: "/usestate-future-value",
        name: "use useState 2",
        Element: UseStateFutureValue
    },
    {
        path: "/usestate-type-assertion",
        name: "use useState assertion",
        Element: UseStateTypeAssertion
    },
    {
        path: "/usereducer",
        name: "using useReducer react",
        Element: UseReducerHook
    },

];