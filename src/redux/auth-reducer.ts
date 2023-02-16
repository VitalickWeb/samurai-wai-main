import {AuthDataType} from "../components/header/HeaderContainer";
import {DataUserType} from "../components/profile/ProfileContainer";

const initialState = {
    data: {} as AuthDataType,
    dataUser: {} as DataUserType,
    isAuth: false
};
export type InitialAuth = typeof initialState

type setAuthUserDataAT = ReturnType<typeof setAuthUserData>
type setDataUserProfileAT = ReturnType<typeof setDataUserProfile>

export type ActionsTypes = setAuthUserDataAT | setDataUserProfileAT

//action нужны reducers - редьюсер будет анализировать этот action и что-то изменять
//reducer принимает старый state и action и меняется этот state на основании action.

const authReducer = (state: InitialAuth = initialState, action: ActionsTypes): InitialAuth => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state,
                data: action.data,
                isAuth: true
            }

        case 'SET-DATA-USER-PROFILE':
            console.log(action.dataUser)
            return {...state,
                dataUser: action.dataUser
            }

        default:
            return state
    }
}
export const setAuthUserData = (data: AuthDataType) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data,
    } as const
}
export const setDataUserProfile = (dataUser: DataUserType) => {
    return {
        type: 'SET-DATA-USER-PROFILE',
        dataUser
    } as const
}
export default authReducer