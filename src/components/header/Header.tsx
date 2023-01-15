import React from 'react';
import smartCity from '../../assets/images/logo/smartCity.png';
import st from './Header.module.css';

export const Header = () => {
    return (
        <header className={st.topHeader}>
            <div className={st.logo}>
                <img src={smartCity}/>
                <h1 className={st.itemHeader}>SMART CITY</h1>
            </div>

        </header>
    );
}