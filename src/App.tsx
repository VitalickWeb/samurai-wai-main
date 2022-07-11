import React from 'react';
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
import state, {addDialog, RootStateType} from "./redux/State";

export type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    newPostTextMessage: (newPost: string) => void
    addDialog: (dialogMessage: string) => void
    newDialogTextMessage: (newDialog: string) => void
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
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            newPostTextMessage={props.newPostTextMessage}
                        />}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            dialogPage={props.state.dialogPage}
                            addDialog={props.addDialog}
                            newDialogTextMessage={props.newDialogTextMessage}
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
