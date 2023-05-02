import React from "react";
import st from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import {DataUserType} from "../ProfileContainer";
import profileAva from '../../../assets/images/profile-avatar/Default-avatar.jpg'

export type ProfileInfoPropsType = {
    dataUser: DataUserType
}

export const ProfileInfo = ({dataUser}: ProfileInfoPropsType) => {
    if (!dataUser.fullName) {
        return <Preloader />
    }

    return (
        <>
            <div className={st.image}> </div>
            <div className={st.avaDesc}>
                {dataUser.photos.large
                    ? <img src={dataUser.photos.large} alt="ava"/>
                    : <img src={profileAva} alt="plug"/>}
                    <div><span>Full Name: </span>{dataUser.fullName}</div>
                Looking for a job status: {!dataUser.lookingForAJob
                ? <img className={st.imageJob} src="https://i.ytimg.com/vi/yF_2L6UN81E/maxresdefault.jpg" alt=""/>
                : <img className={st.imageFindJob}
                       src="https://st3.depositphotos.com/1177973/13993/i/600/depositphotos_139931542-stock-photo-handsome-young-programmer.jpg"
                       alt=""/>
            }
                <div><span>Looking For a job description: </span>{dataUser.lookingForAJobDescription}</div>
                <div className={st.blockContacts}>Contacts:<span className={st.contacts}>facebook: { dataUser.contacts.facebook } </span></div>
                <div className={st.blockContacts}><span className={st.contacts}>github: { dataUser.contacts.github } </span></div>
                <div className={st.blockContacts}><span className={st.contacts}>vk: { dataUser.contacts.vk } </span></div>
                <div className={st.blockContacts}><span className={st.contacts}>instagram: { dataUser.contacts.instagram } </span></div>
                <div className={st.blockContacts}><span className={st.contacts}>twitter: { dataUser.contacts.twitter } </span></div>
                <div className={st.blockContacts}><span className={st.contacts}>mainLink: { dataUser.contacts.mainLink } </span></div>
                <div className={st.blockContacts}><span className={st.contacts}>website: { dataUser.contacts.website } </span></div>
                <div className={st.blockContacts}><span className={st.contacts}>youtube: { dataUser.contacts.youtube } </span></div>
                <div>About me: {dataUser.aboutMe}</div>
            </div>
        </>
    );
}