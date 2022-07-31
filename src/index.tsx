import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {} from "./redux/State";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            message={store._state.profilePage.newPostText}
            //если внутри функции addPost например, которая является методом объекта и внутри этого метода используется this
            //значит обязательно, если мы этот метод передаем как callback, нужно позаботится о том чтобы этот this
            //не вызвался от другого имени, нам нужно использовать метод bind() на эту же функцию в том хранилище, где
            //находится функция, в данном случае store
            dispatch={store.dispatch.bind(store)}
            //newPostTextMessage={store.newPostTextMessage.bind(store)}
            addDialog={store.addDialog.bind(store)}
            newDialogTextMessage={store.newDialogTextMessage.bind(store)}
            state={store.getState()}
        />, document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscriber(rerenderEntireTree)//импортируемый из стэйта subscriber вызывает функцию перерисовки как колбэк