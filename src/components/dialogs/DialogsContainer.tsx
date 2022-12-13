import React, {KeyboardEvent} from "react";
import {addDialogAC, newDialogTextMessageAC} from "../../redux/Dialog-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";
import {ReduxRootStoreType} from "../../redux/Redux-store";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store: ReduxRootStoreType) => {
                    let state = store.getState().dialogPage

                    const addDialogHandler = () => {
                        store.dispatch(addDialogAC(state.newDialogText))
                    }

                    const newDialogMessageHandler = (text: string) => {
                        store.dispatch(newDialogTextMessageAC(text))
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