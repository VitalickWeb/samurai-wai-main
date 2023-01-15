import React from 'react';
import {UsersPageType} from './UsersContainer';
import st from './Users.module.css'
import avatarPhoto from '../../assets/images/Default-users/avatar.jpg'
import axios from "axios";
//import * as axios from "axios";
//* as означает - импортируй все, что там экспортируется под общим названием axios - то есть все упаковываем в один объект,
//который называется axios и мы будем обращаться через этот объект, ко всему тому что иы импортировали
export const Users = (props: UsersPageType) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            // debugger
            props.setUsers(response.data.items)
        })
    }

    let usersRender = props.users.map(u => {
        const onClickFollow = () => {
            props.follow(u.id)
        }

        const onClickUnFollow = () => {
            props.unFollow(u.id)
        }

        return (
            <div key={u.id}>
                <img className={st.photoUser} src={u.photos.small !== null ? u.photos.small : avatarPhoto}/>
                <div className={st.boxButton}>
                    {!u.followed
                        ? <button className={st.buttonFollow} onClick={onClickFollow}>UnFollow</button>
                        : <button className={st.buttonUnFollow} onClick={onClickUnFollow}>Follow</button>}
                </div>
                <div className={st.infoUser}>
                    {u.name} {u.status} {"u.location.country"} {"u.location.city"}
                </div>
            </div>
        );
    })

    return (
        <div className={st.blockPageUsers}>
            {usersRender}
        </div>
    );
};

