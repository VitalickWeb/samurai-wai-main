import {PostType} from "../components/profile/myPosts/post/Post";
import {UsersType} from "../components/dialogs/dialogUsers/DialogUsers";
import {DialogsMessagesType} from "../components/dialogs/dialogMessages/DialogMessages";
import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dataUsers: Array<UsersType>
    dataMessage: Array<DialogsMessagesType>
    newDialogText: string
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

let state: RootStateType = {
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
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: v1(),
        message: postMessage,
        likeCounts: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const addDialog = () => {
    const newDialog: DialogsMessagesType = {
        id: v1(),
        message: state.dialogPage.newDialogText,
    }
    state.dialogPage.dataMessage.push(newDialog)
    state.dialogPage.newDialogText = ''
    rerenderEntireTree(state)
}

export const newPostTextMessage = (newPost: string) => {
    state.profilePage.newPostText = newPost
    rerenderEntireTree(state)
}

export const newDialogTextMessage = (newDialog: string) => {
    state.dialogPage.newDialogText = newDialog
    rerenderEntireTree(state)
}

export default state;

