import React, {ChangeEvent} from "react";

//Контейнерная компонента, которая через себя передает в store
//все что не может передавать презентационная компонента. Так же имеет право быть
//не чистой, не тупой, разрешено знать о системе и инфраструктуре приложения, о запросах
//и хранении данных. Предназначена она для того чтобы удовлетворить нужды презентационной
//компоненты
import {ActionsTypes} from "../../../redux/Store";
import {addPostAC, NewPostTextMessageAC} from "../../../redux/Profile-reducer";
import {MyPosts} from "./MyPosts";

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

export const MyPostsContainer = (props: PostPropsType) => {

    const addPost = () => {
        let action = addPostAC(props.profilePageText)
        props.dispatch(action)
    }

    const onChangePostValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = NewPostTextMessageAC(e.currentTarget.value);
        props.dispatch(action)
    }

    return (
        <div>
            <MyPosts
                addPost={addPost}
                profilePageText={props.profilePageText}
                profileMessage={props.profileMessage}
                dispatch={props.dispatch}
            />
        </div>
    );
}