import React from 'react';
import {UserType} from './UsersContainer';
import st from './Users.module.css'
import avatarPhoto from '../../assets/images/Default-users/avatar.png'
import {NavLink} from "react-router-dom";


//import * as axios from "axios";
//* as означает - импортируй все, что там экспортируется под общим названием axios - то есть все упаковываем в один объект,
//который называется axios и мы будем обращаться через этот объект, ко всему тому что иы импортировали.

//Если не написать extends React.Component то объект созданный с помощью класса User не будет обладать
// нужными умениями, чтобы react мог с ними взаимодействовать. Поэтому мы не пишем new User пишет new User
//React за кадром, мы этого не видим, это поведение зашито в React.Component
//Каждый класс должен определить метод render() потому что react когда будет создавать объект с помощью
//класса User, он от этого объекта будет хотеть самого главного, получить от него JSX.

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    onChangePage: (pageNumber: number) => void//передали на верх параметр и типизацию через колбэк 2
   // toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: []
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //получаем сколько будет страниц в пагинации

    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let usersRender = props.users.map((u: UserType) => {
        const onClickFollow = () => {
            props.follow(u.id)
            // props.toggleFollowingProgress(true, u.id)
            // followAPI.postFallow(u.id).then(data => {
            //     if (data.resultCode === 0) {
            //         props.follow(u.id)
            //     }
            //     props.toggleFollowingProgress(false, u.id)
            // })
        }

        const onClickUnFollow = () => {
            props.unFollow(u.id)
            // props.toggleFollowingProgress(true, u.id)//перед асинхронным запросом дспатчим true
            // unFollowAPI.deleteFallow(u.id).then(data => {
            //     if (data.resultCode === 0) {
            //         props.unFollow(u.id)
            //     }
            //     props.toggleFollowingProgress(false, u.id)//после окончания асинхронного запроса диспатчим false
            // })
        }

        return (
            <div key={u.id}>
                <NavLink to={"/profile/" + u.id}>
                    <img className={st.photoUser} src={u.photos.small !== null ? u.photos.small : avatarPhoto} alt=""/>
                </NavLink>
                <div className={st.boxButton}>
                    {!u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={st.buttonFollow} onClick={onClickFollow}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} className={st.buttonUnFollow} onClick={onClickUnFollow}>Follow</button>}
                </div>
                <div className={st.infoUser}>
                    {u.name} {u.status} {"u.location.country"} {"u.location.city"}
                </div>
            </div>
        );
    })

    let dedicatedPage = `${props.currentPage && st.digitalBold}`
    let pagination = `${props.currentPage && st.digitalNormal}`

    return (
        <div className={st.blockPageUsers}>
            <div className={st.pagination}>
                {pages.map((p, index) => {
                    return (
                        <div key={index} className={st.blockPagination}>
                            <span
                                className={props.currentPage === p ? st.digitalBold : pagination}
                                onClick={() => {
                                    props.onChangePage(p)//сменили страницу 1
                                }}
                            >{p}
                            </span>
                        </div>
                    );
                })}
            </div>
            {usersRender}
        </div>
    );
}

