import React, {ChangeEvent} from 'react';
import st from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {ProfilePageType} from "../../../redux/State";

type MyPostsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    newPostTextMessage: (dialogMessage: string) => void
}

export const MyPosts = (props: MyPostsType) => {
    const addPost = () => {
        props.addPost(props.profilePage.newPostText)
    }

    const onChangePostValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostTextMessage(e.currentTarget.value)
    }

    return (
        <div className={st.contain}>
            <div>
                <div className={st.myPost}>
                    <h3>My post</h3>
                </div>
                <div className={st.writePost}>
                    <textarea
                        value={props.profilePage.newPostText}
                        onChange={onChangePostValue}
                    />
                </div>
                <div className={st.buttonAddPost}>
                     <button onClick={addPost}>add post</button>
                </div>
            </div>

            <div className={st.PostsMessages}>
                <div className={st.message}>
                    <Post
                        dialogMessage={props.profilePage.posts}
                    />
                </div>
            </div>
        </div>
    );
}