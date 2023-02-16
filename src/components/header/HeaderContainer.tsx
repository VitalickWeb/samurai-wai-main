import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setDataUserProfile} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/Redux-store";
import axios from "axios";
import {DataUserType} from "../profile/ProfileContainer";

export type AuthDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
}
export type MapStateToProps = {
    data: AuthDataType
    dataUser: DataUserType
    iaAuth: boolean
}

export type MapDispatchToProps = {
    setAuthUserData: (data: AuthDataType) => void
    setDataUserProfile: (dataUser: DataUserType) => void
}
class HeaderClassContainer extends React.Component<AuthType, AppRootStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
           withCredentials: true //второй параметр в котором сидят настройки запроса
        }).then(response => {
            if (response.data.resultCode === 0) {

                let data: AuthDataType = response.data.data //деструктуировали что бы не доставать по одному свойству.
                this.props.setAuthUserData(data)
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ${data.id}`).then(response => {
                    // debugger
                    this.props.setDataUserProfile(response.data)
                })
            }
        })
    }

    render() {

        return (
            <>
                <Header
                    {...this.props}
                    dataAuth={this.props.data}
                    isAuth={this.props.iaAuth}
                    dataUser={this.props.dataUser}
                />
            </>
        );
    };
}

export type AuthType = MapStateToProps & MapDispatchToProps & {}

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        data: state.auth.data,
        iaAuth: state.auth.isAuth,
        dataUser: state.auth.dataUser,
    }
}

export const HeaderContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppRootStateType>( mapStateToProps, {
    setAuthUserData, setDataUserProfile
} )(HeaderClassContainer)

