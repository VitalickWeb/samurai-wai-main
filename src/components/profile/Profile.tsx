import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPosts } from "./myPosts/MyPosts";
import {ProfilePageType} from "../../redux/State";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    newPostTextMessage: (dialogMessage: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                addPost={props.addPost}
                newPostTextMessage={props.newPostTextMessage}
            />
        </div>
    );
}