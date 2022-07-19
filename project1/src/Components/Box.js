import React, { useState } from 'react'

function Box(props) {
    const[state,SetState]=useState(props.on)

    function hadleClick(){
        SetState(prevState => !prevState)
    }
    const styles={
        backgroundColor: state ?"Green":""
    }
  return (
    <div id="box" style={styles} onClick={hadleClick}></div>
  )
}

export default Box