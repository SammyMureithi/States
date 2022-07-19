import React, { useState } from 'react'
import Message from './Message';
import messages from './messages'

function MaterMessage() {
    const [Messages,setMessage]=useState(messages);
    const [unreadCount,setUnread]=useState(Messages.length);

      function markRead(id){
          setUnread(prevUnread => {
              return prevUnread-1
           })
           setMessage((prevMessages) => {
              return prevMessages.map(prevMessage => {
                return prevMessage.id===id ?{...prevMessage,status:!prevMessage.status}:prevMessage
              })
           })
          }
    function hideMessages(id){
        setMessage((prevMess) => {
            return prevMess.map(element => {
                return element.id===id ?{...element,hide:!element.hide,status:true}:element
            })
        })
        setUnread(prevUnread => {
            return prevUnread-1
         })
         setMessage((prevMessages) => {
            return prevMessages.map(prevMessage => {
              return prevMessage.id===id ?{...prevMessage,status:true}:prevMessage
            })
         })
    }
   

    const  result=Messages.map(message => (
        <Message id={message.id} name={message.name}
        photo={message.dp} hide={message.hide} text={message.message}
        ReadStatus={message.status} key={message.id} handleHide={hideMessages} handleRead={markRead}/>
    ))
  return (
    <div id='master'>
       {unreadCount> 0 ?<h1>You have {unreadCount} unread {unreadCount>1? "messages":"message"}</h1>:  <h1>You are up to Date</h1>}
        {result}</div>
  )
}

export default MaterMessage