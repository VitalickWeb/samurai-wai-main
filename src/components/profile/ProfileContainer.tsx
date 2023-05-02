import React from 'react';
import {AppRootStateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/Profile-reducer";
import {withRedirect} from "../../hocs/withRedirect";
import {compose} from "redux";

export type DataUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string | undefined
        large: string | undefined
    }
}
export type MapStateToProps = {
    dataUser: DataUserType
}

export type MapDispatchToProps = {
    getUserProfile: (userId: number) => void
}

export class ProfileClassContainer extends React.Component
    <RouteComponentProps<{userId: number}> & ProfilePageType, AppRootStateType>{

    componentDidMount() {//только в этом методе можно делать сайд эффекты
        let userId = this.props.match.params.userId //достаем данные из того что приходит нам в параметрах profile
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        // profileAPI.getProfile(userId).then(data => {
        //     this.props.setDataUser(data)
        // })
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    dataUser={this.props.dataUser}
                />
            </div>
        )
    }
};

let mapStateIsAuthRedirectComponent = (state: AppRootStateType): {isAuth: boolean} => {
    return {
        isAuth: state.auth.isAuth
    }
}

export type ProfilePageType = MapStateToProps & MapDispatchToProps & {}

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        dataUser: state.profilePage.dataUser,
    }
}

//что значит 2 вызова, вызывается та функция, которую вернул нам первый вызов функции compose
//compose вернул нам функцию и мы ее вызываем, ту функцию, которую вернул compose
export default compose(
    connect<MapStateToProps, MapDispatchToProps, {}, AppRootStateType>(mapStateToProps, {
        getUserProfile
    }),
    withRouter,
    withRedirect
)(ProfileClassContainer)

//обволакиваем третий раз в контейнерную компоненту для того что бы прокинуть в нашу конечную компоненту данные из URL
// let withUrlDataContainerComponent = withRouter(ProfileClassContainer)
//
// let withAuthRedirectComponent = withRedirect(withUrlDataContainerComponent)
//
// withAuthRedirectComponent = connect(mapStateIsAuthRedirectComponent)(withAuthRedirectComponent)
//
// //Рефакторинг mapDispatchToProps вторым параметром сразу вызываем AC в объекте сократив много кода
// export const ProfileContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppRootStateType>(mapStateToProps,
//     {getUserProfile})(withAuthRedirectComponent)
