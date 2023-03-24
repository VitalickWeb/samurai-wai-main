import {UserType} from "../components/users/UsersContainer";
import {followAPI, unFollowAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 80,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [''],//когда идет добавление [id] закидываем в массив, а при удалении юзера id[] удаляем из массива.
};
export type InitialUsersPageType = typeof initialState

type followAT = ReturnType<typeof followSuccess>
type unFollowAT = ReturnType<typeof unFollowSuccess>
type setUsersAT = ReturnType<typeof setUsers>
type setCurrentPageAT = ReturnType<typeof setCurrentPage>
type setTotalCountAT = ReturnType<typeof setTotalCount>
type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
type toggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

export type ActionsTypes = followAT |
    unFollowAT |
    setUsersAT |
    setCurrentPageAT |
    setTotalCountAT |
    toggleIsFetchingAT |
    toggleFollowingProgressAT

//action нужны reducers - редьюсер будет анализировать этот action и что-то изменять
//reducer принимает старый state и action и меняется этот state на основании action.

export const usersReducer = (state: InitialUsersPageType = initialState, action: ActionsTypes): InitialUsersPageType => {
    switch (action.type) {
        case 'FALLOWED-FRIEND':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case 'UNFOLLOWED-FRIEND':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case 'SET-USERS':
            //откуда то придут пользователи, мы берм старый state, взять пользователей которые там были
            //и перезаписать пользователями, которые пришли к нам в action
            return {...state, users: action.usersAdd}//перезатираем старый массив пользователей новым

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount}

        case 'TOGGLE-PRELOADER':
            return {...state, isFetching: action.isFetching}

        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,//если в action приходит фолс, то фоловинг завершился и из массива нужно будет удалить айли
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}
export const followSuccess = (userId: string) => {
    return {
        type: 'FALLOWED-FRIEND',
        userId
    } as const
}
export const unFollowSuccess = (userId: string) => {
    return {
        type: 'UNFOLLOWED-FRIEND',
        userId
    } as const
}
export const setUsers = (usersAdd: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        usersAdd
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}
export const setTotalCount = (count: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount: count,
    } as const
}
export const toggleIsFetching = (load: boolean) => {
    return {
        type: 'TOGGLE-PRELOADER',
        isFetching: load
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId
    } as const
}

//Thunk это функция которая внутри себя диспатчит обычные action
export const getUsers = (currentPage: number, pageSize: number) => {
//ThunkCreator это функция которая может что то принимать и которая возвращает санку
    return (dispatch: Dispatch<ActionsTypes>) => {
    // return (dispatch: (type: setUsersAT | setTotalCountAT | toggleIsFetchingAT) => void) => {
        dispatch(toggleIsFetching(true))//вызываем функцию из mapDispatchToProps, сработает при перезагрузке страницы
        dispatch(setCurrentPage(currentPage))
        //запрос пошел, вызываем функцию дай мне пользователей, когда пользователи придут
        //продолжим в then обрабатывать ответ.
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false))// когда пришел ответ, запрос прекратился
            dispatch(setUsers(data.items))//Происходит вызов users
            dispatch(setTotalCount(data.totalCount))//отображение сколько страниц в пагинации
        })
    }
}


export const follow = (userId: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleFollowingProgress(true, userId))
        followAPI.postFallow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const unFollow = (userId: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleFollowingProgress(true, userId))//перед асинхронным запросом дспатчим true
        unFollowAPI.deleteFallow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))//после окончания асинхронного запроса диспатчим false
        })
    }
}



export default usersReducer

//Берем реальное значение пользователей во вкладке Network Preview при первом запросе Users?Page=2&Count=5
//Закидываем их в reducer