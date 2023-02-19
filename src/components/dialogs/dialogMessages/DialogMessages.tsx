import React from "react";
import st from "./DialogMessages.module.css";

export type DialogsMessagesType = {
    id: string
    message: string
}

export const DialogMessages = (props: DialogsMessagesType) => {

    return (
        <div className={st.blockDialog}>
            <div className={st.blockImg}>
                <img className={st.imgAva}
                     src='https://st4.depositphotos.com/11338062/25695/v/380/depositphotos_256959188-stock-illustration-ronin-ninja-samurai-logo-vector.jpg?forcejpeg=true'
                />
            </div>
            <div className={st.messagesItem}>
                <span className={st.blockMessage}>
                    {props.message}
                </span>
            </div>
        </div>
    );
}
