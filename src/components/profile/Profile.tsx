import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostContainer";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer

            />
        </div>
    );
}