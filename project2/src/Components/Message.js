import React, { useState } from 'react'

function Message(props) {
    
  return (
    <div id='chat'>
       <img src={`./images/${props.photo}`} alt="dp"/>
       <div id="left">
        <h1>Name:: {props.name}</h1>
       {props.hide && <p>{props.text}</p>}
        <div id='btn'>
        {props.hide ?<button onClick={() =>props.handleHide(props.id)}>Hide</button>:<button onClick={() =>props.handleHide(props.id)}>Show</button>}
        {!props.ReadStatus ?<button onClick={() => props.handleRead(props.id)}>Mark as Read</button>: ""}
        </div>
        <hr></hr>
       </div>
    </div>
  )
}

export default Message