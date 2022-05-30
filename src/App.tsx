import React from 'react';
import './App.css';
import './components/header/Header.module.css';
import './components/navigation/Navigation.module.css';
import './components/profile/Profile.module.css';

import { Header } from './components/header/Header';
import { Navigation } from './components/navigation/Navigation';
import { Profile } from './components/profile/Profile';

const App = () => {
    return (//в div оборачиваем все приложение
        <div className="app-wrapper">
            <Header />
            <Navigation />
            <Profile />
        </div>
    );
}

export default App;
