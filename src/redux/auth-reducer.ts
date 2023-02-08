import {AuthDataType} from "../components/header/HeaderContainer";

const initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    } as AuthDataType,
    isAuth: false
};
export type InitialAuth = typeof initialState

type setUserDataAT = ReturnType<typeof setUserData>

export type ActionsTypes = setUserDataAT

//action нужны reducers - редьюсер будет анализировать этот action и что-то изменять
//reducer принимает старый state и action и меняется этот state на основании action.

const authReducer = (state: InitialAuth = initialState, action: ActionsTypes): InitialAuth => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state,
                data: action.data,
                isAuth: true
            }

        default:
            return state
    }
}
export const setUserData = (data: AuthDataType) => {
    return {
        type: 'SET-USER-DATA',
        data
    } as const
}


export default authReducer