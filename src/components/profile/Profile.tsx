import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPosts } from "./myPosts/MyPosts";
import {PostType} from "./myPosts/post/Post";

type ProfileType = {
    postData: Array<PostType>
    addPost: (postMessage: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={props.postData}
                addPost={props.addPost}
            />
        </div>
    );
}