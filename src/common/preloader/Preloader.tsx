import React from 'react';
import preSpinner from "../../assets/images/Default-users/Spinner-0.7s-61px.svg";

export type PreloaderPropsType = {

}

export const Preloader = ({}: PreloaderPropsType) => {
    return (
        <div>
            <img src={preSpinner} alt=""/>
        </div>
    );
};

