import {v1} from "uuid";
import {DialogsMessagesType} from "../components/dialogs/dialogMessages/DialogMessages";
import {UsersType} from "../components/dialogs/dialogUsers/DialogUsers";

export type addDialogAT = ReturnType<typeof addDialogAC>
export type newDialogTextMessageAT = ReturnType<typeof newDialogTextMessageAC>

export type ActionTypes = addDialogAT | newDialogTextMessageAT

const initialState = {
    dataUsers: [
        {id: v1(), dialog: 'Vitaliy'},
        {id: v1(), dialog: 'Vera'},
        {id: v1(), dialog: 'Liza'},
        {id: v1(), dialog: 'Vladimir'},
        {id: v1(), dialog: 'Alexandr'},
        {id: v1(), dialog: 'Natasha'},
        {id: v1(), dialog: 'Dmitriy'},
        {id: v1(), dialog: 'Yaroslav'},
    ] as  Array<UsersType>,
    dataMessage: [
        {id: v1(), message: 'Hello, how are you?'},
        {id: v1(), message: 'Hi, i\'m fine'},
        {id: v1(), message: 'and you?'},
        {id: v1(), message: 'First message'},
        {id: v1(), message: 'Second message'},
        {id: v1(), message: 'Third message'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Last message'},
    ] as Array<DialogsMessagesType>,
    newDialogText: '',
};

export type InitialDialogPageType = typeof initialState

const DialogReducer = (state: InitialDialogPageType = initialState, action: ActionTypes): InitialDialogPageType => {
    switch (action.type) {
        case 'ADD-DIALOG':
            const newDialog: DialogsMessagesType = {
                id: v1(),
                message: state.newDialogText,
            }
            return {
                ...state,
                newDialogText: '',
                dataMessage: [...state.dataMessage, newDialog],

            }

        case 'NEW-DIALOG-TEXT-MESSAGE':
            return {
                ...state,
                newDialogText: action.newDialog
            }
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