import React from 'react';
import {AppRootStateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, unFollow,} from "../../redux/Users-reducer";
import {Users} from "./Users";
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
    followingInProgress: []
}
export type MapDispatchToProps = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    getUsers: (currenPage:number, pageSize: number) => void
    setCurrentPage: (currentPage: number) => void//идет передача параметра и типизации колбэка 5
    // toggleFollowingProgress: (isFetching: boolean, userId: string) => void
}


class UsersClassContainer extends React.Component<UsersPageType> {//идет вызов классовой компоненты

    componentDidMount() {//в этом методе только можно делать сайд эффекты
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)//вызываем функцию из mapDispatchToProps, сработает при перезагрузке страницы
        //
        // //запрос пошел, вызываем функцию дай мне пользователей, когда пользователи придут
        // //продолжим в then обрабатывать ответ.
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetching(false)// когда пришел ответ, запрос прекратился
        //     this.props.setUsers(data.items)//Происходит вызов users
        //     this.props.setTotalCount(data.totalCount)//отображение сколько страниц в пагинации
        // })
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
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.toggleIsFetching(true)//отображается preloader при ожидании отображении страницы
        // this.props.setCurrentPage(pageNumber)
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetching(false)//прекращает отображаться preloader при загрузке страницы.
        //     this.props.setUsers(data.items)
        // })
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
                    // toggleFollowingProgress={this.props.toggleFollowingProgress}
                    //не нужно передавать в компоненту toggleFollowingProgress, так как не мы извне делаем запрос,
                    // а это происходит как часть бизнес процесса внутри BLL
                    // получается что все работает через thunk
                    followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    } as MapStateToProps
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
        follow, unFollow, setCurrentPage, getUsers
    })(UsersClassContainer)
//классовая компонента UsersClassContainer вызывается контейнерной компонентой UsersContainer
