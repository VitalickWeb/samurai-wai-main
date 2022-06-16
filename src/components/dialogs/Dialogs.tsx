import React from "react";
import st from './Dialogs.module.css';
import {DialogUsers, UsersType} from "./dialogUsers/DialogUsers";
import {DialogMessages, DialogsMessagesType} from "./dialogMessages/DialogMessages";

type RootDialogsPropsType = {
    dataUsers: Array<UsersType>
    dataMessage: Array<DialogsMessagesType>
}

export const Dialogs = (props: RootDialogsPropsType) => {
    console.log(props)
    return (
        <div className={st.dialogs}>
            <div className={st.dialogItems}>
                <DialogUsers
                    dataUsers={props.dataUsers}
                />
            </div>
            <div className={st.messages}>
                <DialogMessages
                    dialogsMessages={props.dataMessage}
                />
            </div>
        </div>
    );
}