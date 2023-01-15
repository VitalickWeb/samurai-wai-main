import React from 'react';
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/Users-reducer";

export type UserType = {
    id: string
    photoURL: string
    followed: boolean
    name: string
    status: string
    photos: {
        small: null
    }
    // location: {
    //     country: string,
    //     city: string,
    // }
}

export type MapStateToProps = {
    users: Array<UserType>
}
export type MapDispatchToProps = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (usersAdd: Array<UserType>) => void
}
export type UsersMapStatePropsType = ReturnType<typeof mapStateToProps>
export type UsersMapDispatchPropsType = ReturnType<typeof mapDispatchToProps>
export type UsersPageType = UsersMapStatePropsType & UsersMapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: string) => {//функция которая принимает пользовательский id, что бы передать его в AC, сформировать
            dispatch(followAC(userId))//action с нужным id и задиспатчить его.
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (usersAdd: Array<UserType>) => {
            dispatch(setUsersAC(usersAdd))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

