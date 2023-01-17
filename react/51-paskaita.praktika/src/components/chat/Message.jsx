import React from 'react'
import './chat.css'

export const Message = (props) => {
   return (
      <div className="message-row">
         <img className="avatar" src={props.data.avatarUrl} />
         <div className="name-container">
            <div className="name">{props.data.username}</div>
            <div className="message">{props.data.message}</div>
         </div>
      </div>
   )
}
