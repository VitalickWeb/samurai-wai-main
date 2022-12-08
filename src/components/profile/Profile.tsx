import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPosts } from "./myPosts/MyPosts";
import {ActionsTypes, ProfilePageType} from "../../redux/Store";

export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profileMessage={props.profilePage.posts}
                profilePageText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}