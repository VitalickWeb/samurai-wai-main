import {PostType} from "../components/profile/myPosts/post/Post";
import {UsersType} from "../components/dialogs/dialogUsers/DialogUsers";
import {DialogsMessagesType} from "../components/dialogs/dialogMessages/DialogMessages";
import {v1} from "uuid";


export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dataUsers: Array<UsersType>
    dataMessage: Array<DialogsMessagesType>
    newDialogText: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export type RootStoreType = {
    _state: RootStateType
    addPost: (postMessage: string) => void
    addDialog: () => void
    newPostTextMessage: (newPost: string) => void
    newDialogTextMessage: (newDialog: string) => void
    _rerenderEntireTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootStateType
}

/**
 * All functions and variables packed in one object of the store
 * which is used as data storage.
 * !!!rerenderEntireTree, addPost, addDialog, newPostTextMessage, newDialogTextMessage, subscriber!!! - is now a methods of the store object
 */
let store: RootStoreType = {
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
            newPostText: '...',
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
            newDialogText: '...',
        },
        sidebar: {},
    },

    _rerenderEntireTree() {
        console.log('state changed')
    },
    addPost(postMessage: string) {
        const newPost: PostType = {
            id: v1(),
            message: postMessage,
            likeCounts: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree()
    },
    addDialog() {
        const newDialog: DialogsMessagesType = {
            id: v1(),
            message: this._state.dialogPage.newDialogText,
        }
        this._state.dialogPage.dataMessage.push(newDialog)
        this._state.dialogPage.newDialogText = ''
        this._rerenderEntireTree()
    },
    newPostTextMessage(newPost: string) {
        this._state.profilePage.newPostText = newPost
        this._rerenderEntireTree()
    },
    newDialogTextMessage(newDialog: string) {
        this._state.dialogPage.newDialogText = newDialog
        this._rerenderEntireTree()
    },
    subscriber(observer) {//эту функцию вызывает файл который ее импортирует
        // функция subscriber ищет в родительском файле функцию rerenderEntireTree и присваивает ей колбэк observer
        //теперь rerenderEntireTree ссылается на ту функцию которая ей пришла в праметре - observer
        //тем временем в параметр observer ей пришла функция на которую ссылается rerenderEntireTree которая вызывает рендеринг
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    }
}

export default store;
//window.store = store
