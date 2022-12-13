import React from "react";

//Контейнерная компонента, которая через себя передает в store
//все что не может передавать презентационная компонента. Так же имеет право быть
//не чистой, не тупой, разрешено знать о системе и инфраструктуре приложения, о запросах
//и хранении данных. Предназначена она для того чтобы удовлетворить нужды презентационной
//компоненты
import {RootStoreType} from "../../../redux/Store";
import {MyPosts} from "./MyPosts";
import {addPostAC, NewPostTextMessageAC} from "../../../redux/Profile-reducer";
import StoreContext from "../../../StoreContext"


export type DialogContainerType = {
    store: RootStoreType
}

export const MyPostsContainer = (props: DialogContainerType) => {

    return (
        <StoreContext.Consumer>
            {
                (store: RootStoreType) => {
                    let state = props.store.getState().profilePage

                    const addPost = () => {
                        let action = addPostAC(state.newPostText)
                        props.store.dispatch(action)
                    }

                    const onChangePostValue = (text: string) => {
                        let action = NewPostTextMessageAC(text);
                        props.store.dispatch(action)
                    }
                    return (
                        <MyPosts
                            addPost={addPost}
                            changePostValue={onChangePostValue}
                            profileMessage={state.posts}
                            profilePageText={state.newPostText}
                        />
                    );
                }
            }
        </StoreContext.Consumer>
    );
}