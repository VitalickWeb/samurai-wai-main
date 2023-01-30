import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostContainer";
import {DataUserType} from "./ProfileContainer";

export type ProfilePropsType = {
    dataUser: DataUserType
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo
                dataUser={props.dataUser}
            />
            <MyPostsContainer

            />
        </div>
    );
}