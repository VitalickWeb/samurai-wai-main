import React from 'react';
import {Friends} from "./Friends";
import StoreContext from "../../StoreContext";
import {ReduxRootStoreType} from "../../redux/Redux-store";

export type FriendType = {
    id: string
    name: string
}

// export type FriendsPropsType = {
//     title: string
//     usersFriends: Array<FriendType>
//     dispatch: (action: ActionsTypes) => void
// }


export const FriendsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store: ReduxRootStoreType) => {
                    let state = store.getState().sidebar

                    return (
                        <Friends
                            title={state.title}
                            usersFriends={state.usersFriends}
                        />)
                }
            }
        </StoreContext.Consumer>
    );
};

