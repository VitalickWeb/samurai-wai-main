import React, {ChangeEvent, KeyboardEvent} from "react";
import st from './Dialogs.module.css';
import {DialogUsers} from "./dialogUsers/DialogUsers";
import {DialogMessages} from "./dialogMessages/DialogMessages";
import {DialogPropsTypes} from "./DialogsContainer";


export const Dialogs = (props: DialogPropsTypes) => {

    const renderUsers = props.dataUsers.map(du => {
        return (
            <div key={du.id}>
                <DialogUsers id={du.id} dialog={du.dialog}/>
            </div>
        );
    })

    const renderMessages = props.dataMessage.map(dm => {
        return (
            <div className={st.blockItem} key={dm.id}>
                <DialogMessages id={dm.id} message={dm.message}/>
            </div>
        );
    })

    const addDialogHandler = () => {
        props.addDialog(props.newDialogText)
    }

    const newDialogMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPost = e.currentTarget.value
        props.newDialogMessage(newPost)
    }

    const keyDownDialogMessageHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addDialogHandler()
        }
    }
    return (
        <div className={st.dialogs}>
            <div className={st.dialogItems}>
                {renderUsers}
            </div>
            <div className={st.messages}>
                {renderMessages}
                <div className={st.blockForm}>
                    <div className={st.blockInput}>
                        <textarea
                            placeholder="Write a message"
                            value={props.newDialogText}
                            onChange={newDialogMessageHandler}
                            onKeyDown={keyDownDialogMessageHandler}
                        />
                    </div>
                    <div className={st.blockButton}>
                        {props.newDialogText !== '' && <button onClick={addDialogHandler}>submit</button>}
                    </div>
                </div>
            </div>
        </div>
    );
}