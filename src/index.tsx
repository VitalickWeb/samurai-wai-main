import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/State";



ReactDOM.render(
    <App
        posts={state.profilePage.posts}
        dataUsers={state.dialogPage.dataUsers}
        dataMessage={state.dialogPage.dataMessage}
    />, document.getElementById('root')
);