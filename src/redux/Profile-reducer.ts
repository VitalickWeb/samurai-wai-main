import {v1} from "uuid";
import {PostType} from "../components/profile/myPosts/MyPostContainer";
import {DataUserType} from "../components/profile/ProfileContainer";


type addPostAT = ReturnType<typeof addPostAC>
type NewPostTextMessageAT = ReturnType<typeof NewPostTextMessageAC>
export type setDataUserAT = ReturnType<typeof setDataUser>

export type ActionTypes = addPostAT | NewPostTextMessageAT | setDataUserAT

let initialState = {
    dataUser: {} as DataUserType,
    posts: [
        {id: v1(), message: 'Hello, how are you?', likeCounts: 4},
        {id: v1(), message: 'Hi, i\'m fine', likeCounts: 6},
        {id: v1(), message: 'and you?', likeCounts: 2},
        {id: v1(), message: 'First message', likeCounts: 8},
    ] as Array<PostType>,
    newPostText: '',
};

export type InitialProfilePageType = typeof initialState

const ProfileReducer = (state: InitialProfilePageType = initialState, action: ActionTypes): InitialProfilePageType => {
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
            //вместо инструкции break используем return так как return не даст провалиться кейсу
        case 'NEW-POST-TEXT-MESSAGE':
            return {
                ...state,
                newPostText: action.newPost//у объекта action теперь и тип и текст
            }

        case 'SET-DATA-USER':
            return {
                ...state, dataUser: action.dataUser
            }

        default://если придет в ProfileReducer action тип которого не будет в параметрах, то вернем state по умолчанию
            return state;
    }
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
export const setDataUser = (dataUser: DataUserType) => {
    return {
        type: 'SET-DATA-USER',
        dataUser
    } as const
}

export default ProfileReducer;
