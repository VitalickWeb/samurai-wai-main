import React from 'react';
import './App.css';
import './components/header/Header.module.css';
import './components/navigation/Navigation.module.css';
import './components/profile/Profile.module.css';
import './components/dialogs/Dialogs.module.css';

import {Header} from './components/header/Header';
import {Navigation} from './components/navigation/Navigation';
import {Profile} from './components/profile/Profile';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Setting} from "./components/settings/Setting";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, RootStateType} from "./redux/Store";
import Friends from "./components/friends/Friends";
import st from "./components/navigation/Navigation.module.css";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

export type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div>
                    <Navigation/>
                <div className={st.navBlock}>
                    <Friends
                        title="FRIENDS"
                        usersFriends={props.state.sidebar.usersFriends}
                        dispatch={props.dispatch}
                    />
                </div>
                </div>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() =>
                        <Profile
                            state={props.state}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer
                            state={props.state}
                            dispatch={props.dispatch}
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
