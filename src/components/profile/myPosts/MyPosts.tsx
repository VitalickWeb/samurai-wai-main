import React, {ChangeEvent} from 'react';
import st from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {ActionsTypes, addPostAC, NewPostTextMessageAC, ProfilePageType} from "../../../redux/State";

export type MyPostsType = {
    message: string
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    //addPost: (postMessage: string) => void
    //newPostTextMessage: (dialogMessage: string) => void
}

export const MyPosts = (props: MyPostsType) => {
    const addPost = () => {
        props.dispatch(addPostAC(props.message))
    }

    const onChangePostValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = NewPostTextMessageAC(e.currentTarget.value);
        props.dispatch(action)
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