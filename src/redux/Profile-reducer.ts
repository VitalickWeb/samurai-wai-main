import {ActionsTypes, ProfilePageType} from "./Store";
import {v1} from "uuid";
import {PostType} from "../components/profile/myPosts/MyPosts";

let initialState = {
        posts: [
            {id: v1(), message: 'Hello, how are you?', likeCounts: 4},
            {id: v1(), message: 'Hi, i\'m fine', likeCounts: 6},
            {id: v1(), message: 'and you?', likeCounts: 2},
            {id: v1(), message: 'First message', likeCounts: 8},
            {id: v1(), message: 'Second message', likeCounts: 7},
            {id: v1(), message: 'Third message', likeCounts: 24},
            {id: v1(), message: 'Yo', likeCounts: 28},
            {id: v1(), message: 'Last message', likeCounts: 15},
        ],
        newPostText: '',
    };

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
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

//ActionCreator это функция, которая нам возвращает action - правильный объект, с указанным типом AddPostActionType.
//Action - это объект у которого есть как минимум свойство type
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