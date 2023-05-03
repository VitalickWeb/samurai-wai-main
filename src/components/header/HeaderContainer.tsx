import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getHeaderAndProfileId, setDataUserProfile} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/Redux-store";
import {DataUserType} from "../profile/ProfileContainer";
import {compose} from "redux";
import {withRedirect} from "../../hocs/withRedirect";

export type AuthDataType = {
    id: number
    email: string
    login: string
}
export type MapStateToProps = {
    data: AuthDataType
    dataUser: DataUserType
    iaAuth: boolean
}

export type MapDispatchToProps = {
    setDataUserProfile: (dataUser: DataUserType) => void
    getHeaderAndProfileId: (data: AuthDataType) => void
}
class HeaderClassContainer extends React.Component<AuthType, AppRootStateType> {

    componentDidMount() {
        this.props.getHeaderAndProfileId(this.props.data)
        // headerAPI.getHeader().then(response => {
        //     if (response.data.resultCode === 0) {
        //         let data: AuthDataType = response.data.data
        //         this.props.setAuthUserData(data)
        //
        //         profileAPI.getProfile(data.id).then(data => {
        //             this.props.setDataUserProfile(data)
        //         })
        //     }
        // })
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

// let mapStateIsAuthRedirectComponent = (state: AppRootStateType): {isAuth: boolean} => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        data: state.auth.data,
        iaAuth: state.auth.isAuth,
        dataUser: state.auth.dataUser,
    }
}

// export default compose<React.ComponentType>(
//     connect<MapStateToProps, MapDispatchToProps, {}, AppRootStateType>( mapStateToProps, {
//         setDataUserProfile, getHeaderAndProfileId
//     } ),
//     withRedirect
// )(HeaderClassContainer)

export const HeaderContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppRootStateType>( mapStateToProps, {
    setDataUserProfile, getHeaderAndProfileId
} )(HeaderClassContainer)

