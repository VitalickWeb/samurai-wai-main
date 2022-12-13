import React, {KeyboardEvent} from "react";
import {addDialogAC, newDialogTextMessageAC} from "../../redux/Dialog-reducer";
import {Dialogs} from "./Dialogs";
import {RootStoreType} from "../../redux/Store";
import StoreContext from "../../StoreContext";

export type DialogsType = {
    store: RootStoreType
}

export const DialogsContainer = (props: DialogsType) => {
    return (
        <StoreContext.Consumer>
            {
                (store: RootStoreType) => {
                    let state = props.store.getState().dialogPage

                    const addDialogHandler = () => {
                        props.store.dispatch(addDialogAC(state.newDialogText))
                    }

                    const newDialogMessageHandler = (text: string) => {
                        props.store.dispatch(newDialogTextMessageAC(text))
                    }

                    const keyDownDialogMessageHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                        if (e.key === 'Enter') {
                            addDialogHandler()
                        }
                    }

                return (
                    <Dialogs
                        addDialog={addDialogHandler}
                        newDialogMessage={newDialogMessageHandler}
                        newDialogText={state.newDialogText}
                        dataUsers={state.dataUsers}
                        dataMessage={state.dataMessage}
                    />)
                }
            }
        </StoreContext.Consumer>
    );
}