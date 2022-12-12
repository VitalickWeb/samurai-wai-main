import React from "react";

//Контейнерная компонента, которая через себя передает в store
//все что не может передавать презентационная компонента. Так же имеет право быть
//не чистой, не тупой, разрешено знать о системе и инфраструктуре приложения, о запросах
//и хранении данных. Предназначена она для того чтобы удовлетворить нужды презентационной
//компоненты
import {ActionsTypes, RootStateType} from "../../../redux/Store";
import {addPostAC, NewPostTextMessageAC} from "../../../redux/Profile-reducer";
import {MyPosts} from "./MyPosts";

export type PostType = {
    id: string
    message: string
    likeCounts: number
}

export type PostPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const MyPostsContainer = (props: PostPropsType) => {
    let state = props.state

    const addPost = () => {
        let action = addPostAC(state.profilePage.newPostText)
        props.dispatch(action)
    }

    const onChangePostValue = (text: string) => {
        let action = NewPostTextMessageAC(text);
        props.dispatch(action)
    }

    return (
        <div>
            <MyPosts
                addPost={addPost}
                changePostValue={onChangePostValue}
                profileMessage={state.profilePage.posts}
                profilePageText={state.profilePage.newPostText}
            />
        </div>
    );
}