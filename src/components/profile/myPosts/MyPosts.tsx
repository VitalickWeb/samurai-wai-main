import React from 'react';
import st from "./MyPosts.module.css";
import {Post, PostType} from "./post/Post";

type MyPostsType = {
    postData: Array<PostType>
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsType) => {
    let newPostElem = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElem.current) {
            props.addPost(newPostElem.current.value)
        }
    }

    return (
        <div className={st.contain}>
            <div>
                <div className={st.myPost}>
                    <h3>My post</h3>
                </div>
                <div className={st.writePost}>
                    <textarea ref={newPostElem}></textarea>
                </div>
                <div className={st.buttonAddPost}>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>

            <div className={st.PostsMessages}>
                <div className={st.message}>
                    <Post
                        dialogMessage={props.postData}
                    />
                </div>
            </div>
        </div>
    );
}