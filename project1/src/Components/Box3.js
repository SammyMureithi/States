import React from 'react'

function Box3(props) {
    const styles={
        backgroundColor:props.on ?"Black": "",
        
    }
  return (
    <div id='box' style={styles} onClick={() =>props.togle(props.id)}>Box{props.id}</div>
  )
}

export default Box3