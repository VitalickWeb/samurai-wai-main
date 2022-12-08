import React, {ChangeEvent} from 'react';
import st from "./MyPosts.module.css";
import {ActionsTypes, ProfilePageType} from "../../../redux/Store";
import {Post} from "./post/Post";
import {addPostAC, NewPostTextMessageAC} from "../../../redux/Profile-reducer";


export type PostType = {
    id: string
    message: string
    likeCounts: number
}

export type PostPropsType = {
    profilePageText: string
    profileMessage: Array<PostType>
    dispatch: (action: ActionsTypes) => void
}




export const MyPosts = (props: PostPropsType) => {

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

    const addPost = () => {
        let action = addPostAC(props.profilePageText)
        props.dispatch(action)
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
                        value={props.profilePageText}
                        onChange={onChangePostValue}
                    />
                </div>
                <div className={st.buttonAddPost}>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>

            <div className={st.message}>
                {postsRender}
                {/*<Post*/}
                {/*    profilePageText={props.profileMessage.newPostText}*/}
                {/*    profileMessage={props.profileMessage.posts}*/}
                {/*/>*/}
            </div>
        </div>
    );
}


