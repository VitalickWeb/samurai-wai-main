import React from 'react';
import preSpinner from "../../assets/images/Default-users/Spinner-1s-98px.svg";

export type PreloaderPropsType = {

}

export const Preloader = ({}: PreloaderPropsType) => {
    return (
        <div>
            <img src={preSpinner} alt=""/>
        </div>
    );
};

