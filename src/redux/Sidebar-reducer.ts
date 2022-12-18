import {v1} from "uuid";
import {ActionsTypes} from "./Store";
import {FriendType} from "../components/friends/FriendsContainer";

let initialState = {
    title: "FRIENDS",
    usersFriends: [
        {id: v1(), name: "Vitaliy"},
        {id: v1(), name: "Natasha"},
        {id: v1(), name: "Mark"},
        {id: v1(), name: "Oleg"},
        {id: v1(), name: "Alexandra"},
        {id: v1(), name: "Sasha"},
    ] as Array<FriendType>
}

export type SidebarType = typeof initialState

export const SidebarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {
    switch (action.type) {

    }
    return state
}

export default SidebarReducer;

