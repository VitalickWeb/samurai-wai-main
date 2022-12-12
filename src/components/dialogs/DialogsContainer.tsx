import React, {KeyboardEvent} from "react";
import {ActionsTypes, RootStateType} from "../../redux/Store";
import {addDialogAC, newDialogTextMessageAC} from "../../redux/Dialog-reducer";
import {Dialogs} from "./Dialogs";

export type UsersType = {
    id: string
    dialog: string
}

export type DialogsMessagesType = {
    id: string
    message: string
}

type RootDialogsPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const DialogsContainer = (props: RootDialogsPropsType) => {
    let state = props.state

    const addDialogHandler = () => {
        props.dispatch(addDialogAC(state.dialogPage.newDialogText))
    }

    const newDialogMessageHandler = (text: string) => {
        props.dispatch(newDialogTextMessageAC(text))
    }

    const keyDownDialogMessageHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addDialogHandler()
        }
    }
    return (
        <div>
           <Dialogs
               addDialog={addDialogHandler}
               newDialogMessage={newDialogMessageHandler}
               newDialogText={state.dialogPage.newDialogText}
               dataUsers={state.dialogPage.dataUsers}
               dataMessage={state.dialogPage.dataMessage}
           />
        </div>
    );
}