import React,{useState} from 'react'
import  HeadTitle from '../../common/headTitle/HeadTitle'
import './Design.css'
import { Link } from 'react-router-dom'

const Login=()=> {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [allValue,setAllValue] = useState([])
    const formSubmit= (e) => {
        e.preventDefault()  
        const newValue = {email,password}
        setAllValue([...allValue,newValue])
       
        setEmail("")
        setPassword("")
       
    } 
  return (
    <div>
        <HeadTitle/>
        <section className='forms top'>
            <div className='container'>
                <div className='sign-box'>
                    <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
                    <form onSubmit={formSubmit}>
                    
                        <input type='text' name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type='password' name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                      <div className='flex_space'>
                        <div className='flex'>
                            <input type='checkbox'/>
                            <label>Remeber Me</label>
                        </div>
                        <div className='flex'>
                            <span>I forgot my password</span>
                        </div>
                        </div>
                        <button type='submit' className='primary-btn'>
                            Sign In
                        </button>
                        <p>Don't HAVE ACCOUNT? <Link to='/register'>SignUP</Link></p>
                      
                    </form>
                </div>
            </div>
        </section>

        <section className='show-data'>
            {allValue.map((currentValue)=> {
                const {email,password} = currentValue 
                return (

              
            <div className='sign-box'>
                <h1>Send Successfully</h1>

                
                <h3>email : <p>{email }</p> </h3>

                <h3>password : <p>{password }</p> </h3>

               





            </div>
              )
            })}
        </section>
    </div>
  )
}

export default Login