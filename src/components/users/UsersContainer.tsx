import React from 'react';
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC} from "../../redux/Users-reducer";

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type MapDispatchToProps = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (usersAdd: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}
export type UsersMapStatePropsType = ReturnType<typeof mapStateToProps>
export type UsersMapDispatchPropsType = ReturnType<typeof mapDispatchToProps>
export type UsersPageType = UsersMapStatePropsType & UsersMapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))//диспатчим то что нам возвращает вызов AC. Вызов AC всегда возвращает объект
        },
        setTotalCount: (count: number) => {
            dispatch(setTotalCountAC(count))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

