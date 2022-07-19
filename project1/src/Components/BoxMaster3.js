import React, { useState } from 'react'
import Box3 from './Box3'
import boxes from './boxes'

function BoxMaster3() {
    const [Square,setSquare]=useState(boxes)
    function toogle(id){
        setSquare(prevSquares => {
            return prevSquares.map((sqr) => {
              return  sqr.id===id? {...sqr,on:!sqr.on}: sqr

            })
        })
    }

    const result=Square.map((element) => (
        <Box3 id={element.id} togle={toogle} on={element.on} key={element.id}/>
    ))
  return (
    <div>{result}</div>
  )
}

export default BoxMaster3