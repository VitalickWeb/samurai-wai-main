import React from 'react';
import './App.css';
import './components/Header.module.css';
import './components/Navigation.module.css';
import './components/Profile.module.css';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';


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
