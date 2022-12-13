import React from "react";

//Контейнерная компонента, которая через себя передает в store
//все что не может передавать презентационная компонента. Так же имеет право быть
//не чистой, не тупой, разрешено знать о системе и инфраструктуре приложения, о запросах
//и хранении данных. Предназначена она для того чтобы удовлетворить нужды презентационной
//компоненты
import {MyPosts} from "./MyPosts";
import {addPostAC, NewPostTextMessageAC} from "../../../redux/Profile-reducer";
import StoreContext from "../../../StoreContext"
import {ReduxRootStoreType} from "../../../redux/Redux-store";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store: ReduxRootStoreType) => {
                    let state = store.getState().profilePage

                    const addPost = () => {
                        let action = addPostAC(state.newPostText)
                        store.dispatch(action)
                    }

                    const onChangePostValue = (text: string) => {
                        let action = NewPostTextMessageAC(text);
                        store.dispatch(action)
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