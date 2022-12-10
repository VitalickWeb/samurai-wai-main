import React from 'react';
import st from './Navigation.module.css';
import {NavLink} from 'react-router-dom';


export const Navigation = () => {
    return (
        <nav className={st.navBlock}>
            <div className={st.navItem}>
                <div className={st.item}>
                    <NavLink to="/profile" activeClassName={st.active}>Profile</NavLink>
                </div>
                <div className={st.item}>
                    <NavLink to="/dialogs" activeClassName={st.active}>Message</NavLink>
                </div>
                <div className={st.item}>
                    <NavLink to="/news" activeClassName={st.active}>News</NavLink>
                </div>
                <div className={st.item}>
                    <NavLink to="music" activeClassName={st.active}>Music</NavLink>
                </div>
                <div className={st.item}>
                    <NavLink to="/settings" activeClassName={st.active}>Settings</NavLink>
                </div>
            </div>

        </nav>
    );
}