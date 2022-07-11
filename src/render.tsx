import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addDialog, addPost, newDialogTextMessage, newPostTextMessage, RootStateType} from "./redux/State";



export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            addPost={addPost}
            newPostTextMessage={newPostTextMessage}
            addDialog={addDialog}
            newDialogTextMessage={newDialogTextMessage}
            state={state}
        />, document.getElementById('root')
    );
}




