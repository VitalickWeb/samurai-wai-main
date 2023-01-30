import React from 'react';
import {AppRootStateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
} from "../../redux/Users-reducer";
import {Users} from "./Users";
import axios from "axios";
import {Preloader} from "../../common/preloader/Preloader";

export type UserType = {
    id: string
    photoURL: string
    followed: boolean
    name: string
    status: string
    photos: {
        large: null
        small: null
    }
    // location: {
    //     country: string,
    //     city: string,
    // }
}

export type MapStateToProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type MapDispatchToProps = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (usersAdd: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void//идет передача параметра и типизации колбэка 5
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (load: boolean) => void
}


export class UsersClassContainer extends React.Component<UsersPageType> {//идет вызов классовой компоненты
    componentDidMount() {//в этом методе только можно делать сайд эффекты
        this.props.toggleIsFetching(true)//вызываем функцию из mapDispatchToProps, сработает при перезагрузке страницы
            //запрос пошел
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)// когда пришел ответ, запрос прекратился
            this.props.setUsers(response.data.items)//Происходит вызов users
            this.props.setTotalCount(response.data.totalCount)//отображение сколько страниц в пагинации
        })
    }

    // constructor(props: UsersPageType) {
    //     super(props);
    //     //Для того чтобы сделать запрос на сервер необязательно использовать конструкцию if,
    //     //так как конструирование объекта происходит всего один раз.
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }

    // clickGetUsers = () => {//clickGetUsers - метод класса Users
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }

    onChangePage = (pageNumber: number) => {//в параметры приходит объект события, обработчиком события является стрелочная функция по выбору страницы
        this.props.toggleIsFetching(true)//отображается preloader при ожидании отображении страницы
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)//прекращает отображаться preloader при загрузке страницы.
            this.props.setUsers(response.data.items)
        })
    }

    render() {//render(пропсы сюда не приходят)
        //Внутри пропсы становятся частью объекта, поэтому обращаться к пропсам нужно через this
        return (
            <>
                {this.props.isFetching ? <Preloader /> : false}
                {/*пока загружается страница, показывается preloader!*/}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onChangePage={this.onChangePage}
                />
                {/*через атрибут передаем вызов функции в стрелочную функцию onChangePage 3*/}
            </>
        );
    }
}

export type UsersMapStatePropsType = MapStateToProps
export type UsersMapDispatchPropsType = MapDispatchToProps
export type UsersPageType = UsersMapStatePropsType & UsersMapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId: string) => {//функция которая принимает пользовательский id, что бы передать его в AC, сформировать
//             dispatch(followAC(userId))//action с нужным id и задиспатчить его.
//         },
//         unFollow: (userId: string) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (usersAdd: Array<UserType>) => {
//             dispatch(setUsersAC(usersAdd))
//         },
//         setCurrentPage: (pageNumber: number) => {//dispatch on the reducer 4
//             dispatch(setCurrentPageAC(pageNumber))//диспатчим то что нам возвращает вызов AC. Вызов AC всегда возвращает объект
//         },
//         setTotalCount: (count: number) => {
//             dispatch(setTotalCountAC(count))
//         },
//         toggleIsFetching: (load: boolean) => {
//             dispatch(toggleIsFetchingAC(load))
//         }
//     }
// }

//Рефакторинг mapDispatchToProps вторым параметром сразу вызываем AC в объекте сократив много кода
export const UsersContainer = connect(mapStateToProps,
    {
        follow, unFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching
    })(UsersClassContainer)
//классовая компонента UsersClassContainer вызывается контейнерной компонентой UsersContainer
