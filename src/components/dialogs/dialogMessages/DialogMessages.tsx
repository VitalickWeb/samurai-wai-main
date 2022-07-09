import React from "react";
import st from "./DialogMessages.module.css";

export type DialogsMessagesType = {
    id: string
    message: string
}

type DialogsMessagesPropsType = {
    dialogsMessages: Array<DialogsMessagesType>
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

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const clickDialogHandler = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div className={st.blockAllItems}>
            <div className={st.message}>
                {messageRender}
            </div>
            <div className={st.blockForm}>
                <div className={st.blockInput}>
                    <textarea ref={newPostElement} placeholder="Write a message"></textarea>
                </div>
                <div className={st.blockButton}>
                    <button onClick={clickDialogHandler}>submit</button>
                </div>
            </div>
        </div>

    );
}