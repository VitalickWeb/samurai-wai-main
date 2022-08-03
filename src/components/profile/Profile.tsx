import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPosts } from "./myPosts/MyPosts";
import {ActionsTypes, ProfilePageType} from "../../redux/State";

type ProfileType = {
    message: string
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                message={props.message}
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    );
}