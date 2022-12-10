import React from 'react';
import st from "./Friends.module.css";
import {ActionsTypes} from "../../redux/Store";
import MyFriends from "./MyFriends/MyFriends";

export type FriendType = {
    id: string
    name: string
}

export type FriendsPropsType = {
    title: string
    usersFriends: Array<FriendType>
    dispatch: (action: ActionsTypes) => void
}
const Friends = ({title, usersFriends, dispatch}: FriendsPropsType) => {

    let renderFriends = usersFriends.map(u => {
        console.log(u.name)
        return (
            <div key={u.id}>
                <MyFriends
                    name={u.name}
                />
            </div>
        )
    })

    return (
        <div>
            <div className={st.blockFriends}>
                <h3 className={st.titleFriends}>{title}</h3>
            </div>
            <div className={st.imgFriends}>
                {renderFriends}
            </div>
        </div>
    );
};

export default Friends;