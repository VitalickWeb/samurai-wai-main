import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionsTypes, RootStateType} from "../../redux/Store";
import {MyPostsContainer} from "./myPosts/MyPostContainer";

export type ProfileType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    );
}