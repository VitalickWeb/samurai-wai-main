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
                     src='https://stalkerteam.pl/static/other/monthly_2020_04/1208551027_machanaavatar.thumb.PNG.30d62c582b7aee61e9c50b7643d2c5ba.PNG'
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
