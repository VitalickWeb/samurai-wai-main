import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {RootStoreType} from "../../redux/Store";
import {MyPostsContainer} from "./myPosts/MyPostContainer";

export type ProfileType = {
  store: RootStoreType
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}