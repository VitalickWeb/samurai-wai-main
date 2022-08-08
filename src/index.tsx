import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {} from "./redux/Redux-store";
import {RootStateType} from "./redux/Store";



const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            message={state.profilePage.newPostText}
            //если внутри функции addPost например, которая является методом объекта и внутри этого метода используется this
            //значит обязательно, если мы этот метод передаем как callback, нужно позаботится о том чтобы этот this
            //не вызвался от другого имени, нам нужно использовать метод bind() на эту же функцию в том хранилище, где
            //находится функция, в данном случае store
            dispatch={store.dispatch.bind(store)}
            state={store.getState()}
        />, document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())//когда мы узнаем что стэйт изменился, нам нужно у стора запросить этот стэйт заново
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})//импортируемый из стэйта subscriber вызывает функцию перерисовки как колбэк