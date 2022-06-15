import React from 'react';
import st from "./MyPosts.module.css";
import {Post, PostType} from "./post/Post";

type MyPostsType = {
    postData: Array<PostType>
}

export const MyPosts = (props: MyPostsType) => {
    return (
        <div className={st.contain}>
            <div>
                <div className={st.myPost}>
                    <h3>My post</h3>
                </div>
                <div className={st.writePost}>
                    <textarea></textarea>
                </div>
                <div className={st.buttonAddPost}>
                    <button>add post</button>
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