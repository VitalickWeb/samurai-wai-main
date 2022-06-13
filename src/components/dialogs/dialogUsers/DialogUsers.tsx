import React from "react";
import st from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type UsersType = {
    id: number
    dialog: string
}

type DialogsUsersPropsType = {
    dataUsers: Array<UsersType>
}

export const DialogUsers = (props: DialogsUsersPropsType) => {
    //debugger
    const usersRender = props.dataUsers.map(u => {
        let path = `/dialogs/${u.id}`
        return (
            <div key={u.id}>
                <NavLink to={path}>{u.dialog}</NavLink>
            </div>

        );

    })

    return (
        <div className={st.dialog}>
            {usersRender}
        </div>
    );
}