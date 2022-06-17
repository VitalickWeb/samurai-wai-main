import React, {useState} from 'react';
import './App.css';
import './components/header/Header.module.css';
import './components/navigation/Navigation.module.css';
import './components/profile/Profile.module.css';
import './components/dialogs/Dialogs.module.css';

import {Header} from './components/header/Header';
import {Navigation} from './components/navigation/Navigation';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Setting} from "./components/settings/Setting";
import {BrowserRouter, Route} from 'react-router-dom';
import {PostType} from "./components/profile/myPosts/post/Post";
import {UsersType} from "./components/dialogs/dialogUsers/DialogUsers";
import {DialogsMessagesType} from "./components/dialogs/dialogMessages/DialogMessages";

type AppPropsType = {
    posts: Array<PostType>
    dataUsers: Array<UsersType>
    dataMessage: Array<DialogsMessagesType>
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() =>
                        <Profile
                            postData={props.posts}
                        />}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            dataUsers={props.dataUsers}
                            dataMessage={props.dataMessage}
                        />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
