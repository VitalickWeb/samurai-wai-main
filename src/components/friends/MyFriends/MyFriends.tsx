import React from 'react';
import st from "../Friends.module.css";

export type friendType = {
    name: string
}

const MyFriends = ({name}: friendType) => {

    return (
        <div className={st.blockAvatars}>
            <img className={st.imgItems}
                 src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                 alt="ava"
            />
            <div className={st.nameFriends}>
                {name}
            </div>
        </div>
    );
};

export default MyFriends;