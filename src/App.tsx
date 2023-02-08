import React from 'react';
import './App.css';
import './components/header/Header.module.css';
import './components/navigation/Navigation.module.css';
import './components/profile/Profile.module.css';
import './components/dialogs/Dialogs.module.css';

import {Header} from './components/header/Header';
import {Navigation} from './components/navigation/Navigation';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Setting} from "./components/settings/Setting";
import {Route} from 'react-router-dom';
import st from "./components/navigation/Navigation.module.css";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {FriendsContainer} from "./components/friends/FriendsContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import {ProfileContainer} from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";

const App = () => {
    //Страницы которые мы организовываем с помощью Route переключаются между собой с помощью URL браузера.
    // Route - это компонента, которая следит за URL в браузере и если URL совпадает, она делает render, который
    // вызывает свой метод, который возвращает в этом случае JSX разметку конкретную компоненту Profile и DialogsContainer.
    // Этим Route не важно каким образом URL изменился в браузере, толи по обычной ссылке, толи через navLink, толи
    // просто пользователь в ручную вбил, то если там есть что то похожее на этот URL он это рисует, если нет то он
    // это уничтожает.
    return (
            <div className="app-wrapper">
                <HeaderContainer

                />
                <div>
                    <Navigation/>
                    <div className={st.navBlock}>
                        <FriendsContainer

                        />
                    </div>
                </div>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer

                        />}/>
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer

                        />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/users" render={() =>
                        <UsersContainer

                        />}/>
                    <Route path="/settings" render={() => <Setting/>}/>
                </div>
            </div>
    );
}

export default App;
