import React, { useState } from 'react'
import Box from './Box'
import boxes from './boxes'

function BoxMaster() {
    const [Boxex,setBoxex]=useState(boxes)

    const result=Boxex.map((element) => (
        <Box key={element.id} on={element.on}/>
    ))
  return (
    <div>{result}</div>
  )
}

export default BoxMaster