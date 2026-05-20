import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import metaLogo from"../../../Images/meta logo.png"
import "../Style/LoginStyle.scss"
import RegisterHook from '../Hook/RegisterHook'
function Login() {
  const {loading , error , login , setResult,result ,setError} = RegisterHook()

  useEffect(()=>{
    setError(null);
    setResult("");
  },[])
 const[userName , setUserName]= useState("")
const[password , setPassword] = useState("")

async function formHandler(e){
  e.preventDefault()
  const response = await login ( userName , password);
  if(!response){
    return
  }
}
  return (
  <main className='login'>
    <div className='loginWrapper'>
      <h1>Log into instagram</h1>
      <form  onSubmit={(e)=>formHandler(e)}>
        <div>
        <label htmlFor="userName">
          <input type="text"  placeholder='username or email' id='userName' name='userName' className='userName input' value={userName} onChange={(e)=>{
            setUserName(e.target.value)
          }}/>
        </label>
        </div>
        <div>
          <label htmlFor="password">
            <input type="password" placeholder='password' id='password' name="password" className='password input' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </label>
        </div>
        {result && <p className='result'>{result}</p>}
        {error && <p className='error'>{error}</p>}
        <button className='loginBtn'>{loading? "Loading..." : "Log in"}</button>
      </form>
        <button className='register-login'><Link className='registerLink' to="/register">Create new account</Link></button>
      <img src={metaLogo} alt="meta logo" />
    </div>
  </main>
  )
}

export default Login
