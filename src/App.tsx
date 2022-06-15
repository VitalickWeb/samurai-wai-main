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

const App = () => {
    const [postData, aetPostData] = useState<Array<PostType>>([
        {id: 1, message: 'Hello, how are you?', likeCounts: 4},
        {id: 2, message: 'Hi, i\'m fine', likeCounts: 6},
        {id: 3, message: 'and you?', likeCounts: 2},
        {id: 4, message: 'First message', likeCounts: 8},
        {id: 5, message: 'Second message', likeCounts: 7},
        {id: 6, message: 'Third message', likeCounts: 24},
        {id: 7, message: 'Yo', likeCounts: 28},
        {id: 8, message: 'Last message', likeCounts: 15},
    ])
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={ ()=> <Profile postData={postData}/>}/>
                    <Route path="/dialogs" render={ () => <Dialogs />}/>
                    <Route path="/news" render={ () => <News />}/>
                    <Route path="/music" render={ () => <Music />}/>
                    <Route path="/settings" render={() => <Setting />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
