import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MESSAGES_PATH } from '../../App';
import Fetch from '../../helper/Fetch';
import "./chat.css"
import { Message } from './Message';
import { nanoid } from 'nanoid';

export const Chat = (props) => {

   const [messages, setMessages] = useState([]);

   async function loadMessages(){
      const allMessages = await new Fetch(MESSAGES_PATH, null).get();
      setMessages(allMessages);
   }

   function renderMessages(){
      return (
         messages.map(entry => 
         <Message 
            data={entry} 
            user={props.user}
            messages={messages}
            setMessages={setMessages}
         />)
      )
   }

   function handleSendingMessage(e){
      if(e.key !== "Enter") return;

      // Post user object in user state alongside what was in the
      // message input
      const messageObject = {
         ...props.user,
         id: nanoid(),
         message: e.target.value
      }
      new Fetch(MESSAGES_PATH, null).post(messageObject)

      // Update local messages state
      setMessages(current => [...current, messageObject]);

      // Clear message input
      e.target.value = "";
   }

   useEffect(()=>{
      loadMessages();
   }, [])

   return (
      <section id="chat">
         <div className="chat-container">
            <div className="messages-container">
               {messages.length !== 0 && renderMessages()}
            </div>

            {props.user?
               <div className="input-container" onKeyDown={handleSendingMessage}>
                  <img src={props.user.avatarUrl} alt="avatar" className="avatar" />
                  <input type="text" className="input-style message-input" placeholder="Enter your message here..." />
               </div>
            :
               <p>Login to send messages.</p>
            }
         </div>
      </section>
   )
}
