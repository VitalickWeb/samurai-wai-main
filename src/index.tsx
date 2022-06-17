import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from "./components/profile/myPosts/post/Post";
import {UsersType} from "./components/dialogs/dialogUsers/DialogUsers";
import {DialogsMessagesType} from "./components/dialogs/dialogMessages/DialogMessages";

const postData:Array<PostType> = [
    {id: 1, message: 'Hello, how are you?', likeCounts: 4},
    {id: 2, message: 'Hi, i\'m fine', likeCounts: 6},
    {id: 3, message: 'and you?', likeCounts: 2},
    {id: 4, message: 'First message', likeCounts: 8},
    {id: 5, message: 'Second message', likeCounts: 7},
    {id: 6, message: 'Third message', likeCounts: 24},
    {id: 7, message: 'Yo', likeCounts: 28},
    {id: 8, message: 'Last message', likeCounts: 15},
]

const dataUsers:Array<UsersType> = [
    {id: 1, dialog: 'Vitaliy'},
    {id: 2, dialog: 'Vera'},
    {id: 3, dialog: 'Liza'},
    {id: 4, dialog: 'Vladimir'},
    {id: 5, dialog: 'Alexandr'},
    {id: 6, dialog: 'Natasha'},
    {id: 7, dialog: 'Dmitriy'},
    {id: 8, dialog: 'Yaroslav'},
]

const dataMessage:Array<DialogsMessagesType> = [
    {id: 1, message: 'Hello, how are you?'},
    {id: 2, message: 'Hi, i\'m fine'},
    {id: 3, message: 'and you?'},
    {id: 4, message: 'First message'},
    {id: 5, message: 'Second message'},
    {id: 6, message: 'Third message'},
    {id: 7, message: 'Yo'},
    {id: 8, message: 'Last message'},
]

ReactDOM.render(
    <App
        posts={postData}
        dataUsers={dataUsers}
        dataMessage={dataMessage}
    />, document.getElementById('root')
);