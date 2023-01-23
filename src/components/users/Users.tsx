import React from 'react';
import {UsersPageType, UserType} from './UsersContainer';
import st from './Users.module.css'
import avatarPhoto from '../../assets/images/Default-users/avatar.png'
import axios from "axios";
//import * as axios from "axios";
//* as означает - импортируй все, что там экспортируется под общим названием axios - то есть все упаковываем в один объект,
//который называется axios и мы будем обращаться через этот объект, ко всему тому что иы импортировали.

//Если не написать extends React.Component то объект созданный с помощью класса User не будет обладать
// нужными умениями, чтобы react мог с ними взаимодействовать. Поэтому мы не пишем new User пишет new User
//React за кадром, мы этого не видим, это поведение зашито в React.Component
//Каждый класс должен определить метод render() потому что react когда будет создавать объект с помощью
//класса User, он от этого объекта будет хотеть самого главного, получить от него JSX.

export class Users extends React.Component<UsersPageType> {
    componentDidMount() {//в этом методе только можно делать сайд эффекты
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    // constructor(props: UsersPageType) {
    //     super(props);
    //     //Для того чтобы сделать запрос на сервер необязательно использовать конструкцию if,
    //     //так как конструирование объекта происходит всего один раз.
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             // debugger
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }

    // clickGetUsers = () => {//clickGetUsers - метод класса Users
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             // debugger
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }

    onChangePage = (pageNumber: number) => {//в параметры приходит объект события, обработчиком события является стрелочная функция по выбору страницы
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {//render(пропсы сюда не приходят)
        //Внутри пропсы становятся частью объекта, поэтому обращаться к пропсам нужно через this

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) //получаем сколько будет страниц в пагинации

        let pages: Array<number> = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let usersRender = this.props.users.map((u: UserType) => {
            const onClickFollow = () => {
                this.props.follow(u.id)
            }

            const onClickUnFollow = () => {
                this.props.unFollow(u.id)
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

        let dedicatedPage = `${this.props.currentPage && st.digitalBold}`
        let pagination = `${this.props.currentPage && st.digitalNormal}`

        return (
            <div className={st.blockPageUsers}>
                <div className={st.pagination}>
                    {pages.map((p, index) => {
                        return (
                            <div key={index} className={st.blockPagination}>
                                <span
                                    className={this.props.currentPage === p ? st.digitalBold : pagination}
                                    onClick={() => {
                                        this.onChangePage(p)
                                    }}
                                >{p}
                                </span>
                            </div>
                        );
                    })}
                </div>
                {/*<button onClick={this.clickGetUsers}>Get Users</button>*/}
                {usersRender}
            </div>
        );
    }
}


//ФУНКЦИОНАЛЬНАЯ КОМПОНЕНТА
//############################################################################
// export const Users = (props: UsersPageType) => {
// //Функция Users вызывается реактом и эта функция должна просто вернуть значение, в нутри этой функции есть
// // другая функция, которая делает запрос на сервер, поэтому Users считается чистой функцией, которая сразу
// // отрисовывает разметку.
//     const clickGetUsers = () => {
//         if (props.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 // debugger
//                 props.setUsers(response.data.items)
//             })
//         }
//     }
//
//     let usersRender = props.users.map(u => {
//         const onClickFollow = () => {
//             props.follow(u.id)
//         }
//
//         const onClickUnFollow = () => {
//             props.unFollow(u.id)
//         }
//
//         return (
//             <div key={u.id}>
//
//                 <img className={st.photoUser} src={u.photos.small !== null ? u.photos.small : avatarPhoto}/>
//                 <div className={st.boxButton}>
//                     {!u.followed
//                         ? <button className={st.buttonFollow} onClick={onClickFollow}>UnFollow</button>
//                         : <button className={st.buttonUnFollow} onClick={onClickUnFollow}>Follow</button>}
//                 </div>
//                 <div className={st.infoUser}>
//                     {u.name} {u.status} {"u.location.country"} {"u.location.city"}
//                 </div>
//             </div>
//         );
//     })
//
//     return (
//         <div className={st.blockPageUsers}>
//             <button onClick={clickGetUsers}>Get Users</button>
//             {usersRender}
//         </div>
//     );
// };