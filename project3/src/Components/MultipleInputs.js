import React, {useState} from 'react'

function MultipleInputs() {
    const [formData,setFormData]=useState(
        {firstName: "",lastName: "",email:"",isFriendly: true}
        )
        function handleInput(event){
            
            setFormData(prevState =>{
                const [name,value,type]=event.target

                return {...prevState,
                    [name]: type==="checkbox" ? checked :value}
            })
        }
  return (
    <div>
           <form>
            <label for="fname">First name</label>
                <input 
                type="text"
                name='firstName'
                onChange={handleInput} value={formData.firstName}/>
                <h1>First name: {formData.firstName}</h1>
                <label for="lname">Last name</label>
                <input 
                type="text"
                name='lastName'
                onChange={handleInput} value={formData.lastName}/>
                <h1>Last name: {formData.lastName}</h1>
                <label for="email">Enter Email</label>
                <input 
                type="text"
                name='email'
                onChange={handleInput} value={formData.email}/>
                <h1>Email : {formData.email}</h1>
                <input 
                type="checkbox" 
                id="isFriendly" 
                name='checkbox'
                checked={formData.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            </form>
    </div>
  )
}

export default MultipleInputs