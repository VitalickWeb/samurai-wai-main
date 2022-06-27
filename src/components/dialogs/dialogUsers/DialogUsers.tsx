import React from "react";
import st from "./DialogUsers.module.css";
import {NavLink} from "react-router-dom";

export type UsersType = {
    id: string
    dialog: string
}

type DialogsUsersPropsType = {
    dataUsers: Array<UsersType>
}

export const DialogUsers = (props: DialogsUsersPropsType) => {
    const usersRender = props.dataUsers.map(u => {
        let path = `/dialogs/${u.id}`
        return (
            <div key={u.id} className={st.users}>
                <div className={st.items}>
                    <img src="https://st4.depositphotos.com/11338062/25695/v/380/depositphotos_256959188-stock-illustration-ronin-ninja-samurai-logo-vector.jpg?forcejpeg=true" alt=""/>
                    <div className={st.name}>
                        <NavLink to={path} className={st.usersName}>{u.dialog}</NavLink>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className={st.dialog}>
            {usersRender}
        </div>
    );
}