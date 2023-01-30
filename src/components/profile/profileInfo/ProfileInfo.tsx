import React from "react";
import st from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import {DataUserType} from "../ProfileContainer";

export type ProfileInfoPropsType = {
    dataUser: DataUserType
}

export const ProfileInfo = ({dataUser}: ProfileInfoPropsType) => {
    if (!dataUser.fullName) {
        return <Preloader />
    }

    return (
        <>
            <div className={st.image}>
                {/*<img src="https://static1.gensler.com/uploads/image/41812/filename/_000-cities-comfidential-2000x1125_1642627052.jpg"/>*/}
            </div>
            <div className={st.avaDesc}>
                <img src={dataUser.photos.large ? dataUser.photos.large : ''} alt=""/>
                <span>{dataUser.fullName}</span>
                <span>ava description</span>
            </div>
        </>
    );
}