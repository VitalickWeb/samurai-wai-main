import {UserType} from "../components/users/UsersContainer";


const initialState = {
        users: [] as Array<UserType>,
        pageSize: 80,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false
    };
    export type InitialUsersPageType = typeof initialState

    type followAT = ReturnType<typeof followAC>
    type unFollowAT = ReturnType<typeof unFollowAC>
    type setUsersAT = ReturnType<typeof setUsersAC>
    type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>
    type setTotalCountAT = ReturnType<typeof setTotalCountAC>
    type toggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>

    type ActionsTypes = followAT | unFollowAT | setUsersAT | setCurrentPageAT | setTotalCountAT | toggleIsFetchingAT

//action нужны reducers - редьюсер будет анализировать этот action и что-то изменять
//reducer принимает старый state и action и меняется этот state на основании action.

const usersReducer = (state: InitialUsersPageType = initialState, action: ActionsTypes): InitialUsersPageType => {
        console.log(state, action)
    switch (action.type) {
        case 'FALLOWED-FRIEND':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case 'UNFOLLOWED-FRIEND':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case 'SET-USERS':
            //откуда то придут пользователи, мы берм старый state, взять пользователей которые там были
            //и перезаписать пользователями, которые пришли к нам в action
            return { ...state, users: action.usersAdd }//перезатираем старый массив пользователей новым

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount}

        case 'TOGGLE-PRELOADER':
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}
export const followAC = (userId: string) => {
    return {
        type: 'FALLOWED-FRIEND',
        userId
    } as const
}
export const unFollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOWED-FRIEND',
        userId
    } as const
}
export const setUsersAC = (usersAdd: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        usersAdd
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}
export const setTotalCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount: count,
    } as const
}
export const toggleIsFetchingAC = (load: boolean) => {
    return {
        type: 'TOGGLE-PRELOADER',
        isFetching: load
    } as const
}

export default usersReducer

//Берем реальное значение пользователей во вкладке Network Preview при первом запросе Users?Page=2&Count=5
//Закидываем их в reducer