import React from 'react';
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/Users-reducer";

export type UserType = {
    id: string
    fallowed: boolean
    fullName: string
    status: string
    location: {
        country: string,
        city: string,
    }
}

export type MapStateToProps = {
    users: Array<UserType>
}
export type MapDispatchToProps = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersMapStatePropsType = ReturnType<typeof mapStateToProps>
export type UsersMapDispatchPropsType = ReturnType<typeof mapStateToProps>
export type UsersPageType = UsersMapStatePropsType | UsersMapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
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

