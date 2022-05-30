import React from 'react';
import st from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={st.navBlock}>
            <ul>
                <li><a href="src/components/Nav#Navigation.tsx">Profile</a></li>
                <li><a href="src/components/Nav#Navigation.tsx">Message</a></li>
                <li><a href="src/components/Nav#Navigation.tsx">News</a></li>
                <li><a href="src/components/Nav#Navigation.tsx">Music</a></li>
                <li><a href="src/components/Nav#Navigation.tsx">Settings</a></li>
            </ul>
        </nav>
    );
}