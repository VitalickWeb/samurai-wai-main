import React from "react";
import st from "../Dialogs.module.css";

export type DialogsMessagesType = {
    id: number
    message: string
}

type DialogsMessagesPropsType = {
    dialogsMessages: Array<DialogsMessagesType>
}

export const DialogMessages = (props: DialogsMessagesPropsType) => {
    //debugger
    const messageRender = props.dialogsMessages.map(m => {
        return (
            <div key={m.id}>{m.message}</div>
        );
    })

    return (
        <div className={st.message}>
            {messageRender}
        </div>
    );
}