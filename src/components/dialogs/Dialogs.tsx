import React, {ChangeEvent, KeyboardEvent} from "react";
import st from './Dialogs.module.css';
import {DialogUsers} from "./dialogUsers/DialogUsers";
import {DialogMessages} from "./dialogMessages/DialogMessages";
import {ActionsTypes, DialogPageType} from "../../redux/Store";
import {addDialogAC, newDialogTextMessageAC} from "../../redux/Dialog-reducer";

export type UsersType = {
    id: string
    dialog: string
}

export type DialogsMessagesType = {
    id: string
    message: string
}

type RootDialogsPropsType = {
    dialogPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: RootDialogsPropsType) => {

    const renderUsers = props.dialogPage.dataUsers.map(du => {
        return (
            <div key={du.id}>
                <DialogUsers id={du.id} dialog={du.dialog}/>
            </div>
        );
    })

    const renderMessages = props.dialogPage.dataMessage.map(dm => {
        return (
            <div className={st.blockItem} key={dm.id}>
                <DialogMessages id={dm.id} message={dm.message}/>
            </div>
        );
    })

    const addDialogHandler = () => {
        props.dispatch(addDialogAC(props.dialogPage.newDialogText))
    }

    const newDialogMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newDialogTextMessageAC(e.currentTarget.value))
    }

    const keyDownDialogMessageHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addDialogHandler()
        }
    }
    return (
        <div className={st.dialogs}>
            <div className={st.dialogItems}>
                {renderUsers}
            </div>
            <div className={st.messages}>
                {renderMessages}
                <div className={st.blockForm}>
                    <div className={st.blockInput}>
                        <textarea
                            placeholder="Write a message"
                            value={props.dialogPage.newDialogText}
                            onChange={newDialogMessageHandler}
                            onKeyDown={keyDownDialogMessageHandler}
                        />
                    </div>
                    <div className={st.blockButton}>
                        {props.dialogPage.newDialogText !== '' && <button onClick={addDialogHandler}>submit</button>}
                    </div>
                </div>
            </div>
        </div>
    );
}