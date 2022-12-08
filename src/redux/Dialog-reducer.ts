import {v1} from "uuid";
import {DialogsMessagesType} from "../components/dialogs/dialogMessages/DialogMessages";
import {ActionsTypes, DialogPageType} from "./Store";

let initialState = {
    dataUsers: [
        {id: v1(), dialog: 'Vitaliy'},
        {id: v1(), dialog: 'Vera'},
        {id: v1(), dialog: 'Liza'},
        {id: v1(), dialog: 'Vladimir'},
        {id: v1(), dialog: 'Alexandr'},
        {id: v1(), dialog: 'Natasha'},
        {id: v1(), dialog: 'Dmitriy'},
        {id: v1(), dialog: 'Yaroslav'},
    ],

    dataMessage: [
        {id: v1(), message: 'Hello, how are you?'},
        {id: v1(), message: 'Hi, i\'m fine'},
        {id: v1(), message: 'and you?'},
        {id: v1(), message: 'First message'},
        {id: v1(), message: 'Second message'},
        {id: v1(), message: 'Third message'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Last message'},
    ],
    newDialogText: '',
};

const DialogReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {
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