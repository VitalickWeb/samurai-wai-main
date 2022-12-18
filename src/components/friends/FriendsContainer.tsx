import React from 'react';
import {AppRootStateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {Friends} from "./Friends";


export type FriendType = {
    id: string
    name: string
}

export type MapStateToProps = {
    title: string
    usersFriends: Array<FriendType>
}

export type FriendMapStatePropsType = ReturnType<typeof mapStateToProps>
export type FriendPropsTypes = FriendMapStatePropsType

const mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        title: state.sidebar.title,
        usersFriends: state.sidebar.usersFriends,
    }
}
const mapDispatchToProps = () => {
    return {

    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)