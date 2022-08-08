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
import {ActionsTypes, RootStateType} from "./redux/Store";

export type AppPropsType = {
    message: string
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
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
                            message={props.message}
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            dialogPage={props.state.dialogPage}
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
