import React from 'react';
import smartCity from '../../assets/images/logo/smartCity.png';
import st from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AuthDataType} from "./HeaderContainer";
import {DataUserType} from "../profile/ProfileContainer";
import avatarPhoto from '../../assets/images/Default-users/avatar.png'
import {Preloader} from "../../common/preloader/Preloader";

export type AuthPropsType = {
    dataAuth: AuthDataType
    dataUser: DataUserType
    isAuth: boolean
}

export const Header = ({dataAuth, dataUser, isAuth}: AuthPropsType) => {

    if (!dataUser) {
        return <Preloader/>
    }

    return (
        <div className={st.topHeader}>
            <div className={st.container}>
                <div className={st.logo}>
                    <img src={smartCity}/>
                    <h1 className={st.itemHeader}>SMART CITY</h1>
                </div>
                <div className={st.blockLogin}>
                    <div className={st.login}>
                        {isAuth ? dataAuth.login : <NavLink to="/login">Log in</NavLink>}
                    </div>
                    <div className={st.photoSmall}>{dataUser.photos &&
                        <img src={dataUser.photos.small ? dataUser.photos.small : avatarPhoto} alt=""/>}
                    </div>
                </div>
            </div>
        </div>
    );
}