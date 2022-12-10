import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/Store";
import {MyPostsContainer} from "./myPosts/MyPostContainer";

export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                profileMessage={props.profilePage.posts}
                profilePageText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}