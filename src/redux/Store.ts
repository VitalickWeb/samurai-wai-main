import {UsersType} from "../components/dialogs/dialogUsers/DialogUsers";
import {DialogsMessagesType} from "../components/dialogs/dialogMessages/DialogMessages";
import {v1} from "uuid";
import ProfileReducer, {addPostAC, NewPostTextMessageAC} from "./Profile-reducer";
import DialogReducer, {addDialogAC, newDialogTextMessageAC} from "./Dialog-reducer";
import SidebarReducer from "./Sidebar-reducer";
import {PostType} from "../components/profile/myPosts/MyPosts";
import {FriendType} from "../components/friends/Friends";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dataUsers: Array<UsersType>
    dataMessage: Array<DialogsMessagesType>
    newDialogText: string
}

export type SidebarType = {
    title: string
    usersFriends: Array<FriendType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export type RootStoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

//Для всех возможных экшэнов создаем типы:
export type ActionsTypes = ReturnType<typeof addPostAC>
                        | ReturnType<typeof NewPostTextMessageAC>
                        | ReturnType<typeof addDialogAC>
                        | ReturnType<typeof newDialogTextMessageAC>

/**
 * All functions and variables packed in one object of the store
 * which is used as data storage.
 * !!!rerenderEntireTree, addPost, addDialog, newPostTextMessage, newDialogTextMessage, subscriber!!! - is now a methods of the store object
 */

// пересмотреть 34 - 38, 42 уроки

export let store: RootStoreType = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
            dataUsers: [
                {id: v1(), dialog: 'Vitaliy'},
                {id: v1(), dialog: 'Vera'},
                {id: v1(), dialog: 'Liza'},
                {id: v1(), dialog: 'Vladimir'},
                {id: v1(), dialog: 'Alexandr'},
                {id: v1(), dialog: 'Natasha'},
                {id: v1(), dialog: 'Dmitriy'},
                {id: v1(), dialog: 'Yaroslav'},
            ],

            dataMessage: [
                {id: v1(), message: 'Hello, how are you?'},
                {id: v1(), message: 'Hi, i\'m fine'},
                {id: v1(), message: 'and you?'},
                {id: v1(), message: 'First message'},
                {id: v1(), message: 'Second message'},
                {id: v1(), message: 'Third message'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Last message'},
            ],
            newDialogText: '',
        },
        sidebar: {
            title: "FRIENDS",
            usersFriends: [
                {id: v1(), name: "Vitaliy"},
                {id: v1(), name: "Natasha"},
                {id: v1(), name: "Mark"},
                {id: v1(), name: "Oleg"},
                {id: v1(), name: "Alexandra"},
                {id: v1(), name: "Sasha"},
            ]
        },
    },

    _callSubscriber() {
        console.log('state changed')
    },

    //getState и subscriber не относятся к методам, которые меняют state
    subscriber(observer ) {//эту функцию вызывает файл который ее импортирует
        // функция subscriber ищет в родительском файле функцию rerenderEntireTree и присваивает ей колбэк observer
        //теперь rerenderEntireTree ссылается на ту функцию которая ей пришла в праметре - observer
        //тем временем в параметр observer ей пришла функция на которую ссылается rerenderEntireTree которая вызывает рендеринг
        this._callSubscriber = observer
    },
    //к свойству или методу объекта обращаемся через this, для того что бы не зависеть от изменений с наружи
    getState() {
        return this._state
    },

    /**
     * reducer это чистая функция, которая принимает state и action, если нужно этот action применяет к этому state
     * и возвращает новый state. Либо же возвращает state, который был до этого не изменен, который пришел в этот reducer,
     * то есть не изменяет его, если action не подошел
     */

    //В dispatch предаем объект action - диспатчим какой-то объект отправляя в store какой-то action - действие, которое
    // описывает какое действие совершить. У него обязательно должно быть свойство type, которое будет текстовым. И
    // в нем будет описано название действия, которое нужно совершить. Писать действие нужно в верхнем регистре пример - 'ADD-POST'.
    //Мы должны спросить у action, если тип равен 'ADD-POST' то выполняем такое-то действие иначе если то другое действие и т.д.
    dispatch(action) {//action это объект у которого как минимум есть св-во type и именно action мы можем диспатчить в store!!!
        //делегировали преобразование веток стэйта редьюсером и уведомили подписчика
        this._state.profilePage = ProfileReducer(this._state.profilePage, action) //нужно вызвать этот reducer и отдать туда часть state, который является profile
        //и адресован именно этому reducer, action который приходит в dispatch передаем так же.
        //reducer возвращает измененную под часть стэйта
        //this._state.profilePage присвоив сюда reducer обновили state
        this._state.dialogPage = DialogReducer(this._state.dialogPage, action)
        this._state.sidebar = SidebarReducer(this._state.sidebar, action)

        this._callSubscriber();//уведомляем подписчика и параметром передаем свой state

        //В action с разным типом есть разный набор дополнительных свойств, потому что каждому action нужны свои доп. св-ва
        //чтобы он мог выполнить ту или иную операцию
        // Мы можем теперь заменить в store вызовы всех методов на один вызов dispatch

        //У нас получается что метод Dispatch один, то есть наружу мы даем всего один метод Dispatch - одну кнопку, но что бы было понятно,
        //человек который будет нажимать эту кнопку - то место где будут вызывать этот метод, должны передать туда еще объект
    }
}

export default store;
//window.store = store
