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
import {Route} from 'react-router-dom';
import st from "./components/navigation/Navigation.module.css";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {FriendsContainer} from "./components/friends/FriendsContainer";

const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <div>
                    <Navigation/>
                    <div className={st.navBlock}>
                        <FriendsContainer

                        />
                    </div>
                </div>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() =>
                        <Profile

                        />}/>
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer

                        />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Setting/>}/>
                </div>
            </div>
    );
}

export default App;
