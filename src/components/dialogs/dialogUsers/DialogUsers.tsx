import React from "react";
import st from "./DialogUsers.module.css";
import {NavLink} from "react-router-dom";

export type UsersType = {
    id: string
    dialog: string
}

export const DialogUsers = (props: UsersType) => {

    let path = `/dialogs/${props.id}`
    return (
        <div className={st.users}>
            <div className={st.items}>
                <img src="https://st4.depositphotos.com/11338062/25695/v/380/depositphotos_256959188-stock-illustration-ronin-ninja-samurai-logo-vector.jpg?forcejpeg=true" alt=""/>
                <div className={st.name}>
                    <NavLink to={props.id} className={st.usersName}>{props.dialog}</NavLink>
                </div>
            </div>
        </div>
    );
}