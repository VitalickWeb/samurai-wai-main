import React from "react";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/Redux-store";
import {connect} from "react-redux";

type MapStateToProps = {
    isAuth: boolean
}

export let mapStateToPropsRedirectComponent = (state: AppRootStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withRedirect = <T,>(Component: React.ComponentType<T>) => {

    class RedirectComponent extends React.Component<MapStateToProps> {

        render() {
            const { isAuth, ...restProps } = this.props;

            if (isAuth === false) return <Redirect to={'/login'}/>

            return <Component {...restProps as T} />;//перерисовывает компоненту, которую принимает параметром функция. if 18v.react -> {...restProps as T & {}}
        }
    }
    let ConnectedIsAuthRedirectComponent = connect(mapStateToPropsRedirectComponent)(RedirectComponent)
    return ConnectedIsAuthRedirectComponent
}


