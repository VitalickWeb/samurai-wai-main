import React from 'react';
import st from "./MyPosts.module.css";
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div className={st.contain}>
            <div>
                <div className={st.myPost}>
                    <span>My post</span>
                </div>
                <div className={st.newPost}>
                    <span>New post</span>
                </div>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}