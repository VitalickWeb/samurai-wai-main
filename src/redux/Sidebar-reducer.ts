import {ActionsTypes, SidebarType} from "./Store";
import {v1} from "uuid";

let initialState = {
    usersFriends: [
        {id: v1(), name: "Vitaliy"},
        {id: v1(), name: "Natasha"},
        {id: v1(), name: "Mark"},
        {id: v1(), name: "Oleg"},
        {id: v1(), name: "Alexandra"},
        {id: v1(), name: "Sasha"},
    ]
}

export const SidebarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {

    return state
}

export default SidebarReducer;