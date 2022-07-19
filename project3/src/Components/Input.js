import React ,{useState}from 'react'

function Input() {

    const [input,setInput]=useState("");
    function handleInput(event){
     // const [name,value,type]=event.target
        const value=event.target.value
        setInput(value)
    }
  return (
    <div>
        <form>
        <label for="fname">First name</label>
            <input 
            type="text"
            name='fname'
            onChange={handleInput} value={input}/>
            <h1>First name: {input}</h1>
           
        </form>
    </div>
  )
}

export default Input