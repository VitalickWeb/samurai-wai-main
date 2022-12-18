import React from 'react';
import st from "./Friends.module.css";
import MyFriends from "./MyFriends/MyFriends";
import {FriendPropsTypes} from "./FriendsContainer";


export const Friends = (props: FriendPropsTypes) => {

    let renderFriends = props.usersFriends.map(u => {
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
                <h3 className={st.titleFriends}>{props.title}</h3>
            </div>
            <div className={st.imgFriends}>
                {renderFriends}
            </div>
        </div>
    );
};
