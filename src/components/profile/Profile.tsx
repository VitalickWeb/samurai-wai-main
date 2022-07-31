import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPosts } from "./myPosts/MyPosts";
import {ActionsTypes, ProfilePageType} from "../../redux/State";

type ProfileType = {
    message: string
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    //addPost: (postMessage: string) => void
    //newPostTextMessage: (dialogMessage: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                message={props.message}
                profilePage={props.profilePage}
                dispatch={props.dispatch}
                // newPostTextMessage={props.newPostTextMessage}
            />
        </div>
    );
}