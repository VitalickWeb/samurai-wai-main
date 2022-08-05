import {v1} from "uuid";
import {DialogsMessagesType} from "../components/dialogs/dialogMessages/DialogMessages";
import {ActionsTypes, DialogPageType} from "./State";

const DialogReducer = (state: DialogPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-DIALOG':
            const newDialog: DialogsMessagesType = {
                id: v1(),
                message: state.newDialogText,
            }
            state.dataMessage.push(newDialog)
            state.newDialogText = ''
            return state;
        case 'NEW-DIALOG-TEXT-MESSAGE':
            state.newDialogText = action.newDialog
            return state;
        default:
            return state;
    }
}

export const addDialogAC = (newDialogText: string) => {
    return {
        type: 'ADD-DIALOG',
        newDialog: newDialogText
    } as const
}

export const newDialogTextMessageAC = (newDialog: string) => {
    return {
        type: 'NEW-DIALOG-TEXT-MESSAGE',
        newDialog: newDialog
    } as const
}

export default DialogReducer;