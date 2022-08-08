import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogReducer from "./Dialog-reducer";
import SidebarReducer from "./Sidebar-reducer";

let reducers = combineReducers({//объединяем три reducers. Через функцию combineReducers передаем объект внутри нее
    profilePage: ProfileReducer,//создали объект у которого есть свойство профайл редюсер и ключ значение является функция, которую мы определили
    dialogPage: DialogReducer,//эти ветки объектов и являются нашим стэйтом
    sidebar: SidebarReducer//все это мы отдаем store
});

let store = createStore(reducers);

export default store;