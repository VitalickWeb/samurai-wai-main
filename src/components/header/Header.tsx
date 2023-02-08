import React from 'react';
import smartCity from '../../assets/images/logo/smartCity.png';
import st from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AuthDataType} from "./HeaderContainer";

export type AuthPropsType = {
    data: AuthDataType
}

export const Header = ({data}: AuthPropsType) => {
    return (
        <div className={st.topHeader}>
            <div className={st.container}>
                <div className={st.logo}>
                    <img src={smartCity}/>
                    <h1 className={st.itemHeader}>SMART CITY</h1>
                </div>
                <div className={st.blockLogin}>
                    <div className={st.login}>
                        <NavLink to="/login">Log in</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}