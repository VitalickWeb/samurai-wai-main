import React from 'react';
import st from "./Post.module.css";

export const Post = () => {
    return (
        <div className={st.post1}>
            <img className={st.img_ava} src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"/>
            <span>post 1</span>
        </div>
    );
}