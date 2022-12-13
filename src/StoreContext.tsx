import React from "react";
import {ReduxRootStoreType} from "./redux/Redux-store";

const StoreContext = React.createContext({} as ReduxRootStoreType)

export type ProviderProps = {
    store: ReduxRootStoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderProps) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext