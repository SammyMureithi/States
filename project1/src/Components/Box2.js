import React, { useState } from 'react'

function Box2(props) {
    const [myState,setMyState]=useState(props.on)

    const styles={
        backgroundColor: props.on ?"Red": ""
    }

  return (
    <div id='box' onClick={() =>props.handleClick(props.id)} style={styles}>
    </div>
  )
}

export default Box2