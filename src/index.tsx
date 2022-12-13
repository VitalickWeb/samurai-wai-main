import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "./StoreContext";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/Redux-store";//импортируем Store из redux-store.ts
import {RootStateType} from "./redux/Store";



export const rerenderEntireTree = (state: RootStateType) => {//вызываем функцию rerenderEntireTree при каждой перерисовке
    ReactDOM.render(
        //все дочерние components обрамляем в StoreContext для того что бы всем дочерних компонентам был доступен Store
        <BrowserRouter>
            <Provider store={store}>
                <App
                    //если внутри функции addPost например, которая является методом объекта и внутри этого метода используется this
                    //значит обязательно, если мы этот метод передаем как callback, нужно позаботится о том чтобы этот this
                    //не вызвался от другого имени, нам нужно использовать метод bind() на эту же функцию в том хранилище, где
                    //находится функция, в данном случае store
                    // dispatch={store.dispatch.bind(store)}
                    // state={state}
                />
            </Provider>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())//когда мы узнаем что стэйт изменился, нам нужно у стора запросить этот стэйт заново
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})//импортируемый из стэйта subscriber вызывает функцию перерисовки как колбэк

//debugger в функции rerenderEntireTree определил нам что state приходит к нам - state = {profilePage: {},
// dialogPage: {},   sidebar: {} }
//и приходит он таким образом - есть такое понятие как call stack. Когда мы используем разные фрэймворки
// или библиотеки во многих сценариях call stack полезен.
    // Например как мы оказались в функции rerenderEntireTree и мы видим что call stack как тарелочки
    //снизу лежит самая первая запущенная анонимная функция, и дальше как тарелочки одна на другую кладется в
    //верх и пока верхняя тарелочка stack  не отработает то и нижняя тоже не отработает и идет с верху в низ
    //называется первый пришел последний вышел. - так вот наш rerenderEntireTree вызвал index.js
//мы взяли store запихнули в него state и все норм

//в реализации своего стора мы уведомляли подписчика каждый раз когда произошло изменение
//редаксовкий стор когда уведомляет подписчика то не передает им state

//каждый раз когда подписчик срабатывает и он узнает что state изменился нужно у стора заново запросить этот state
//  Так как мы не хотим rerenderEntireTree загрязнять функцию стором и прошением у стора этого стэйта,
//отдаем store.subscribe() в качестве подписчика не rerenderEntireTree функцию, а анонимную стрелочную функцию
//в которой и вызовем функцию rerenderEntireTree() и когда стэйт изменится стор вызовет стрелочную функцию
//И когда она вызовется то вызовется и функция rerenderEntireTree() при этом берем этот стэйт
// const rerenderEntireTree = (state: RootStateType) => и просим у стора store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })