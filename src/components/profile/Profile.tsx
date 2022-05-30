import React from 'react';
import st from './Profile.module.css';
import { MyPosts } from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={st.profile}>
            <div>
                <img src="https://static1.gensler.com/uploads/image/41812/filename/_000-cities-comfidential-2000x1125_1642627052.jpg"/>
            </div>
            <div className={st.avaDesc}>
                <span>ava description</span>
            </div>
            <MyPosts />
        </div>
    );
}