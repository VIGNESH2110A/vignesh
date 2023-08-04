import React from 'react'
import './login.css'
import { useContext } from 'react'
import { cartContext } from './App'




const Login = () => {
    const {value,setValue} = useContext(cartContext)

    const check=(e)=>
{
    e.preventDefault()
    const name=document.getElementById("username").value
    const pass=document.getElementById("password").value
    setValue({name,pass})
    console.log(value)
}
  return (
    <div class="main">
                <div class="center">
                    <div class="log_head">
                    <h1>LOGIN</h1>
                    </div>
                   
                    <div>
                        <form onSubmit={check}>
                            <h3>User Name</h3>
                            <input type="text" id="username" required></input>
                            <h3>Password</h3>
                            <input type="password" id="password" required></input>
                            
                            <br></br><br></br>
                        
                            <button >Signin</button>
                       
                            
                        </form>
                        
                        <button>Signup</button> 
                
                        
                    </div>

                </div>
                
            </div>
  )
}

export default Login