import React from 'react';
import axios from "axios";
import {setDataUser} from "../../redux/Profile-reducer";
import {AppRootStateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";

export type DataUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type MapStateToProps = {
    dataUser: DataUserType
}

export type MapDispatchToProps = {
    setDataUser: (dataUser: DataUserType) => void
}

export class ProfileClassContainer extends React.Component<ProfilePageType> {

    componentDidMount() {//только в этом методе можно делать сайд эффекты
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setDataUser(response.data)
        })
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

export type ProfileMapStatePropsType = MapStateToProps
export type ProfileMapDispatchPropsType = MapDispatchToProps
export type ProfilePageType = ProfileMapStatePropsType & ProfileMapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        dataUser: state.profilePage.dataUser,
    }
}

//Рефакторинг mapDispatchToProps вторым параметром сразу вызываем AC в объекте сократив много кода
export const ProfileContainer = connect(mapStateToProps,
    {
        setDataUser
    })(ProfileClassContainer)
