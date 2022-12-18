import React, {ChangeEvent} from 'react';
import st from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {PostPropsTypes} from "./MyPostContainer";


export const MyPosts = (props: PostPropsTypes) => {

    const postsRender = props.profileMessage.map(p => {
        return (
            <div key={p.id}>
                <Post
                    message={p.message}
                    likeCounts={p.likeCounts}
                />
            </div>
        );
    })

    const onAddPost = () => {
        props.addPost(props.profilePageText)
    }

    const onChangePostValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.changePostValue(newText)
    }

    return (
        <div className={st.contain}>
            <div>
                <div className={st.myPost}>
                    <h3>My post</h3>
                </div>
                <div className={st.writePost}>
                    <textarea
                        value={props.profilePageText}
                        onChange={onChangePostValue}
                    />
                </div>
                <div className={st.buttonAddPost}>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>

            <div className={st.message}>
                {postsRender}
            </div>
        </div>
    );
}


