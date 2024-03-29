import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogReducer from "./Dialog-reducer";
import SidebarReducer from "./Sidebar-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"

let rootReducer = combineReducers({//объединяем три reducers. Через функцию combineReducers передаем объект внутри нее
    profilePage: ProfileReducer,//создали объект у которого есть свойство профайл редюсер и ключ значение является функция, которую мы определили
    dialogPage: DialogReducer,//эти ветки объектов и являются нашим стэйтом
    usersPage: usersReducer,
    sidebar: SidebarReducer,//все это мы отдаем store
    auth: authReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>

//thunkMiddleWare это промежуточный уровень который мы внедряем в наш store
export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare));
//@ts-ignore
window.store = store
//создаем store с помощью функции legacy_createStore
//которому нужны редьюсеры, чтобы преобразовывать работы со state через специальную функцию combineReducers
//после того как закомбайним редьюсеры мы отдаем переменную reducers стору

//Автоматически legacy_createStore создает внутри себя state у которого есть свойства положенные в combineReducers
//только теперь они передаются без значений. И поэтому будет возвращать undefined во время инициализации state
// В профайлредьюссере есть State который получает пустой state, если ни какого action не нашлось
//и так как в state нет ни какой подветки какую он мог бы получить и вернуть обратно, он получает undefined

//раз мы попадаем в редьюсер то мы видим что в store диспатчится какой то action, который не соответствует
// нашему action поэтому state возвращает undefined, поэтому для state мы делаем заготовку инициализационного
//значения по умолчанию.

//после работы функции legacy_createStore(rootReducer) родится следующий store
// {
//     state: {
//         posts: [
//
//             ],
//             newPostText: '',
//         },
//         dialogPage: {
//             dataUsers: [
//
//             ],
//             dataMessage: [
//
//             ],
//             newDialogText: '',
//         },
//         sidebar: {
//             title: "FRIENDS",
//             usersFriends: [
//
//             ]
//         },
//     }
//     getState()
//     dispatch()
//     subscribe()
// }