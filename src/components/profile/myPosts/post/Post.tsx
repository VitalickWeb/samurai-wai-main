import React from 'react';
import st from "./Post.module.css";

export type PostType = {
    id: string
    message: string
    likeCounts: number
}

type PostPropsType = {
    dialogMessage: Array<PostType>
}

export const Post = (props: PostPropsType) => {
    const postsRender = props.dialogMessage.map(p => {
        return (
            <div key={p.id} className={st.accountItems}>
                <img className={st.img_ava} src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000216/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"/>
                <div className={st.message}>
                    <span>
                        {p.message}
                    </span>
                </div>
                <div className={st.likes}>
                    <span>like {p.likeCounts}</span>
                </div>
            </div>
        );
    })

    return (
        <div className={st.blockPosts}>
            <div className={st.post1}>
                {postsRender}
            </div>
        </div>
    );
}