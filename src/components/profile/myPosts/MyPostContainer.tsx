import React from "react";
import {MyPosts} from "./MyPosts";
import {addPostAC, NewPostTextMessageAC} from "../../../redux/Profile-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/Redux-store";
import {Dispatch} from "redux";


export type PostType = {
    id: string
    message: string
    likeCounts: number
}

export type MapStateToProps = {
    profilePageText: string
    profileMessage: Array<PostType>
}
export type MapDispatchToProps = {
    addPost: (postMessage: string) => void
    changePostValue: (text: string) => void
}

export type PostMapStatePropsType = ReturnType<typeof mapStateToProps>
export type PostMapDispatchPropsType = ReturnType<typeof mapDispatchToProps>
export type PostPropsTypes = PostMapStatePropsType & PostMapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        profileMessage: state.profilePage.posts,
        profilePageText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (postMessage: string) => {
            dispatch(addPostAC(postMessage))
        },
        changePostValue: (text: string) => {
            dispatch(NewPostTextMessageAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)