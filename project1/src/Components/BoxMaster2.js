import React, { useState } from 'react'
import Box2 from './Box2'
import boxex2 from './boxex2'

function BoxMaster2() {
    const [sqr,setSqr]=useState(boxex2)
    function handleClick(id){
     setSqr(prevSqr => {
        const newArray=[]
        for(let i=0;i<prevSqr.length;i++){
            const currentArray=prevSqr[i];
            if(currentArray.id==id){
                const updateSqr={
                    ...currentArray,
                    on: !currentArray.on
                }
                newArray.push(updateSqr)
               
            }
            else{
                    newArray.push(currentArray)
            }
        }
        return newArray
     })
    }
    const result=sqr.map(element => (
        <Box2 handleClick={handleClick} id={element.id} key={element.id} on={element.on}/>
    ))
  return (
    <div>{result}</div>
  )
}

export default BoxMaster2