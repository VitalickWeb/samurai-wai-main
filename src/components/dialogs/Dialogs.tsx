import React from "react";
import st from './Dialogs.module.css';
import {DialogUsers} from "./dialogUsers/DialogUsers";
import {DialogMessages} from "./dialogMessages/DialogMessages";


export const Dialogs = () => {
    const dataUsers = [
        {id: 1, dialog: 'Vitaliy'},
        {id: 2, dialog: 'Vera'},
        {id: 3, dialog: 'Liza'},
        {id: 4, dialog: 'Vladimir'},
        {id: 5, dialog: 'Alexandr'},
        {id: 6, dialog: 'Natasha'},
        {id: 7, dialog: 'Dmitriy'},
        {id: 8, dialog: 'Yaroslav'},
    ]

    const dataMessage = [
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'Hi, i\'m fine'},
        {id: 3, message: 'and you?'},
        {id: 4, message: 'First message'},
        {id: 5, message: 'Second message'},
        {id: 6, message: 'Third message'},
        {id: 7, message: 'Yo'},
        {id: 8, message: 'Last message'},
    ]
    return (
        <div>
            <div className={st.dialogs}>
                <div className={st.dialogItems}>
                    <DialogUsers
                        dataUsers={dataUsers}
                    />
                </div>
                <div className={st.messages}>
                    <DialogMessages
                        dialogsMessages={dataMessage}
                    />
                </div>
            </div>
        </div>
    );
}