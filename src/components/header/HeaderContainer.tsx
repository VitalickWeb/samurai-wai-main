import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/Redux-store";
import axios from "axios";

export type AuthDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
export type MapStateToProps = {
    data: AuthDataType
}

export type MapDispatchToProps = {
    setUserData: (data: AuthDataType) => void
}
class HeaderClassContainer extends React.Component<AuthType, AppRootStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` ).then(response => {
            debugger

        })
    }

    render() {

        return (
            <>
                <Header {...this.props} data={this.props.data}/>
            </>
        );
    };
}

export type AuthType = MapStateToProps & MapDispatchToProps

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        data: state.auth.data
    }
}

export const HeaderContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppRootStateType>( mapStateToProps, {
    setUserData
})(HeaderClassContainer)

