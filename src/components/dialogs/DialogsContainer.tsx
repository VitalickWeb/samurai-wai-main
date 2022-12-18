import React from "react";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {addDialogAC, newDialogTextMessageAC} from "../../redux/Dialog-reducer";
import {Dispatch} from "redux";

//Контейнерная компонента, которая через себя передает в store
//все что не может передавать презентационная компонента. Так же имеет право быть
//не чистой, не тупой, разрешено знать о системе и инфраструктуре приложения, о запросах
//и хранении данных. Предназначена она для того чтобы удовлетворить нужды презентационной
//компоненты

export type UsersType = {
    id: string
    dialog: string
}
export type DialogsMessagesType = {
    id: string
    message: string
}
export type MapStateToProps = {
    newDialogText: string
    dataUsers: Array<UsersType>
    dataMessage: Array<DialogsMessagesType>
}

export type MapDispatchToProps = {
    addDialog: (newDialogText: string) => void
    newDialogMessage: (text: string) => void
}

export type DialogMapStatePropsType = ReturnType<typeof mapStateToProps>
export type DialogMapDispatchPropsType = ReturnType<typeof mapDispatchToProps>
export type DialogPropsTypes = DialogMapStatePropsType & DialogMapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {//превращаем часть state в props
    return  {
        newDialogText: state.dialogPage.newDialogText,
        dataUsers: state.dialogPage.dataUsers,
        dataMessage: state.dialogPage.dataMessage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return  {
        addDialog: (newDialogText: string) => {
            dispatch(addDialogAC(newDialogText))
        },
        newDialogMessage: (text: string) => {
            dispatch(newDialogTextMessageAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
//Работа функции connect()() - 1)она создает контейнерную компоненту, 2)внутри этой контейнерной компоненты она
// рендерит презентационную компоненту, 3)внутрь презентационной компоненты в качестве props передает те свойства которые сидят
//в объектах f1, f2. Если в этих объектах нет ни каких свойств, значит внутри Dialogs не будет ни каких пропсов

//1-ая функция возвращает объект в котором сидят данные из state - мы берем данные из state и засовываем их в props
//и через свойство dialogPage: как атрибут попадет в пропсы
//2-ая функция будет возвращать колбэки в нашу презентационную компоненту

// const RRDialogsContainer = connect(f1, f2)(Dialogs);
//вызвали Funk connect() которая вернула нам другую функцию и мы вызываем ту функцию
// которую нам вернул предыдущий вызов через вторые скобки connect()(Dialogs) вызывая в ней презентационную компоненту Dialogs
//во круг которой мы создаем контейнерную компоненту которая снабдит презентационную компоненту данными. Эти данные будут создаваться
//через библиотеку connect. Dialogs - законектили к store. и теперь в RRDialogsContainer у нас сидит контейнерная компонента.
//Теперь какой state и callbacks придут в данные нам нужно это определить. Поэтому первым вызовом connect() мы настраиваем
// контейнерную компоненту