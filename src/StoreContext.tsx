import React from "react";
import {RootStoreType} from "./redux/Store";

const StoreContext = React.createContext({} as RootStoreType)

export type ProviderProps = {
    store: RootStoreType;
    children: React.ReactNode;
}

export const Provider = (props: ProviderProps) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext