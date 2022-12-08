import React, {ChangeEvent} from "react";

//Контейнерная компонента, которая через себя передает в store
//все что не может передавать презентационная компонента

import st from "./MyPostsContainer.module.css";
import {MyPosts} from "./MyPosts";
import {ActionsTypes,  ProfilePageType} from "../../../redux/Store";
import {addPostAC, NewPostTextMessageAC} from "../../../redux/Profile-reducer";

export type MyPostsType = {
    message: string
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const MyPostsContainer = (props: MyPostsType) => {
    const addPost = () => {
        props.dispatch(addPostAC(props.message))
    }

    const onChangePostValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = NewPostTextMessageAC(e.currentTarget.value);
        props.dispatch(action)
    }

    return (
        <div className={st.contain}>
            {/*<MyPosts*/}
            {/*    message={}*/}
            {/*    profilePage={}*/}
            {/*    dispatch={}*/}
            {/*/>*/}
        </div>
    );
}