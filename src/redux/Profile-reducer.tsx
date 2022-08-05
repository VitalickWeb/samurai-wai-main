import {ActionsTypes, ProfilePageType} from "./State";
import {PostType} from "../components/profile/myPosts/post/Post";
import {v1} from "uuid";

export const ProfileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                message: action.postMessage,
                likeCounts: 0,
            };
            state.posts.push(newPost);//state здесь будет в место profilePage
            state.newPostText = ''//и здесь тоже
            //вместо callSubscriber() преобразователя, преобразования будут делать state и action в параметрах функции
            return state;//в место инструкции break используем return так как return не даст провалиться кейсу
        case 'NEW-POST-TEXT-MESSAGE':
            state.newPostText = action.newPost//у объекта action теперь и тип и текст
            return state;
        default://если придет в ProfileReducer action тип которого не будет в параметрах, то вернем state по умолчанию
            return state;
    };
};

//Action creator это функция которая нам возвращает action - правильный объект, с указанным типом AddPostActionType
export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const NewPostTextMessageAC = (newPost: string) => {
    return {
        type: 'NEW-POST-TEXT-MESSAGE',
        newPost: newPost
    } as const
}

export default ProfileReducer;