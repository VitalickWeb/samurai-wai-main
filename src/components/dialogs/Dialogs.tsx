import React from "react";
import st from './Dialogs.module.css';
import {DialogUsers} from "./dialogUsers/DialogUsers";
import {DialogMessages} from "./dialogMessages/DialogMessages";
import {ActionsTypes, DialogPageType} from "../../redux/Store";

type RootDialogsPropsType = {
    dialogPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: RootDialogsPropsType) => {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogItems}>
                <DialogUsers
                    dataUsers={props.dialogPage.dataUsers}
                />
            </div>
            <div className={st.messages}>
                <DialogMessages
                    dialogPageText={props.dialogPage.newDialogText}
                    dialogsMessages={props.dialogPage.dataMessage}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}