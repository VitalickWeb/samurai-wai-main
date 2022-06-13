import React, {useState} from 'react';
import st from "./MyPosts.module.css";
import {Post, PostType} from "./post/Post";


export const MyPosts = () => {
    //debugger
    const [postData, aetPostData] = useState<Array<PostType>>([
        {id: 1, message: 'Hello, how are you?', likeCounts: 4},
        {id: 2, message: 'Hi, i\'m fine', likeCounts: 6},
        {id: 3, message: 'and you?', likeCounts: 2},
        {id: 4, message: 'First message', likeCounts: 8},
        {id: 5, message: 'Second message', likeCounts: 7},
        {id: 6, message: 'Third message', likeCounts: 24},
        {id: 7, message: 'Yo', likeCounts: 28},
        {id: 8, message: 'Last message', likeCounts: 15},
    ])

    return (
        <div className={st.contain}>
            <div>
                <div className={st.myPost}>
                    <h3>My post</h3>
                </div>
                {/*<div className={st.newPost}>*/}
                {/*    <span>New post</span>*/}
                {/*</div>*/}
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
                        dialogMessage={postData}
                    />
                </div>
            </div>
        </div>
    );
}