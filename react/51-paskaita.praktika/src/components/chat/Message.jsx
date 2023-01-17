import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { MESSAGES_PATH } from '../../App';
import Fetch from '../../helper/Fetch';
import './chat.css'

export const Message = (props) => {

   const messageRef = useRef(null);

   function handleEdit(e){
      messageRef.current.contentEditable = true
      messageRef.current.focus();
   }

   function handleEditDone(e){
      if(e.key !== "Enter") return;
      
      props.data.message = e.target.innerText;
      new Fetch(MESSAGES_PATH, props.data.id).put(props.data);

      messageRef.current.contentEditable = false;
   }

   function handleDeletion(e){
      // Delete locally first
      const filteredMessages = props.messages.filter(entry => entry.id !== props.data.id);
      props.setMessages(filteredMessages);

      // Delete on server
      new Fetch(MESSAGES_PATH, props.data.id).delete();
   }

   return (
      <div className="message-row">
         <img className="avatar" src={props.data.avatarUrl} />
         <div className="name-container">
            <span className="edit-wrapper">
               <div className="name">{props.data.username}</div>

               {/* Render edit options */}
               {props.user && props.data.username === props.user.username &&
               <div className="edit-container">
                  <svg className="edit-button" 
                  onClick={handleEdit}
                  height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
                  
                  <svg className='delete-button'
                  onClick={handleDeletion}
                  height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
               </div>
               }
            </span>

            <div className="message"
            spellCheck={false}
            ref={messageRef}
            onKeyDown={handleEditDone}
            >
               {props.data.message}
            </div>
         </div>
      </div>
   )
}
