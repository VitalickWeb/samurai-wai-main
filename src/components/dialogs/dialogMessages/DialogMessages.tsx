import React, {ChangeEvent, KeyboardEvent} from "react";
import st from "./DialogMessages.module.css";


export type DialogsMessagesType = {
    id: string
    message: string
}

type DialogsMessagesPropsType = {
    dialogPageText: string
    dialogsMessages: Array<DialogsMessagesType>
    addDialog: () => void
    newDialogTextMessage: (newDialog: string) => void
}

export const DialogMessages = (props: DialogsMessagesPropsType) => {
    const messageRender = props.dialogsMessages.map(m => {
        return (
            <div className={st.blockItem} key={m.id}>
                <div className={st.blockImg}>
                    <img className={st.imgMessage}
                         src='https://stalkerteam.pl/static/other/monthly_2020_04/1208551027_machanaavatar.thumb.PNG.30d62c582b7aee61e9c50b7643d2c5ba.PNG'/>
                </div>
                <div className={st.messagesItem}>
                    <p className={st.blockMessage}>
                        {m.message}
                    </p>
                </div>
            </div>
        );
    })

    const addDialogHandler = () => {
        props.addDialog()
    }

    const newDialogMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newDialogTextMessage(e.currentTarget.value)
    }

    const keyDownDialogMessageHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addDialogHandler()
        }
    }

    return (
        <div className={st.blockAllItems}>
            <div className={st.message}>
                {messageRender}
            </div>
            <div className={st.blockForm}>
                <div className={st.blockInput}>
                    <textarea
                        placeholder="Write a message"
                        value={props.dialogPageText}
                        onChange={newDialogMessageHandler}
                        onKeyDown={keyDownDialogMessageHandler}
                    />
                </div>
                <div className={st.blockButton}>
                    {props.dialogPageText !== '' && <button onClick={addDialogHandler}>submit</button>}
                </div>
            </div>
        </div>

    );
}