import {UserType} from "../components/users/UsersContainer";


const initialState = {
        users: [
            //{id: v1(), photoURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', followed: true, fullName: 'Vit', status: 'study react', location: {country: 'Belarus', city: 'Minsk'}},
            //{id: v1(), photoURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', followed: true, fullName: 'Vera', status: 'manicure', location: {country: 'Belarus', city: 'Minsk'}},
            // {id: v1(), photoURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', followed: false, fullName: 'Sasha', status: 'worker', location: {country: 'Ukraine', city: 'Kiev'}},
            // {id: v1(), photoURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', followed: false, fullName: 'Alex', status: 'programming', location: {country: 'USA', city: 'Washington'}},
        ] as Array<UserType>,
    };
    export type InitialUsersPageType = typeof initialState

    type followAT = ReturnType<typeof followAC>
    type unFollowAT = ReturnType<typeof unFollowAC>
    type setUsersAT = ReturnType<typeof setUsersAC>

    type ActionsTypes = followAT | unFollowAT | setUsersAT

const usersReducer = (state: InitialUsersPageType = initialState, action: ActionsTypes): InitialUsersPageType => {
    switch (action.type) {
        case 'FALLOWED-FRIEND':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case 'UNFOLLOWED-FRIEND':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case 'SET-USERS':
            //откуда то придут пользователи, мы берм старый state, взять пользователей которые там были
            //и перезаписать пользователями, которые пришли к нам в action
            return { ...state, users: [...state.users, ...action.usersAdd] }//склеиваем 2 массива

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

export default usersReducer