import {v1} from "uuid";
import {PostType} from "../components/profile/myPosts/MyPostContainer";


export type addPostAT = ReturnType<typeof addPostAC>
export type NewPostTextMessageAT = ReturnType<typeof NewPostTextMessageAC>

export type ActionTypes = addPostAT | NewPostTextMessageAT

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
        ] as Array<PostType>,
        newPostText: '',
    };

export type InitialProfilePageType = typeof initialState

export const ProfileReducer = (state: InitialProfilePageType = initialState, action: ActionTypes): InitialProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                message: action.postMessage,
                likeCounts: 0,
            };
            return {
                ...state,//state здесь будет в место profilePage
                posts: [...state.posts, newPost],//и здесь тоже
                newPostText: '',
            }
            //вместо callSubscriber() преобразователя, преобразования будут делать state и action в параметрах функции
            //в место инструкции break используем return так как return не даст провалиться кейсу
        case 'NEW-POST-TEXT-MESSAGE':
            return {
                ...state,
                newPostText: action.newPost//у объекта action теперь и тип и текст
            }
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
