import React from 'react'
import './Message.css'

function Message({ user, message, id, classs }) {
    if (user) {
        return (
            <div className= {`messageBox ${classs}`}>
                <div className="user">~ {user}</div>
                <div className="">{message}</div>
            </div>
        )
    }
    else {
        return (
            <div className={`messageBox ${classs}`}>
                <div className="">{message}</div>
            </div>
        )
    }

}

export default Message