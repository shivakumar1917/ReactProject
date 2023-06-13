import React, { useState } from 'react'
import './Contact.css'
const ContactFrom=()=> {
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [subject,setSubject] = useState("")
    const [company,setCompany] = useState("")
    const [message,setMessage] = useState("")
    const [allValue,setAllValue] = useState([])
    const formSubmit= (e) => {
        e.preventDefault()  
        const newValue = {fname,lname,phone,email,subject,company,message}
        setAllValue([...allValue,newValue])
        setFname("")
        setLname("")
        setPhone("")
        setEmail("")
        setSubject("")
        setCompany("")
        setMessage("")
    }
  return (
    <div>
        <section className='contact mtop'>
            <div className='container flex'>
                <div className='main-content'>
                    <h2>Contact from</h2>
                    <p>Fill out the below, We will get back you soon.</p>

                    <form onSubmit={formSubmit}>
                        <div className='grid1'>

                            <din className='input'>
                                <span>
                                    First Name: <label>*</label>
                                </span>
                                <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)}/>
                            </din>
                            <din className='input'>
                                <span>
                                    Last Name: <label>*</label>
                                </span>
                                <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)}/>
                            </din>
                            <din className='input'>
                                <span>
                                    Phone Number: <label>*</label>
                                </span>
                                <input type='text' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </din>
                            <din className='input'>
                                <span>
                                    Email: <label>*</label>
                                </span>
                                <input type='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </din>
                            <din className='input'>
                                <span>
                                    Subject: 
                                </span>
                                <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
                            </din>
                            <din className='input'>
                                <span>
                                    Your Company :
                                </span>
                                <input type='text' name='Company' value={company} onChange={(e) => setCompany(e.target.value)}/>
                            </din>
                            
                        </div>
                        <din className='input inputlast'>
                                <span>
                                    Write your message <label>*</label>
                                </span>
                                <textarea name='message' value={message} cols='30' rows='10' onChange={(e) =>setMessage(e.target.value)}></textarea>
                            </din>
                        <button className='primary-btn'>Submit Now</button>
                    </form>
                </div>

                <div className='side-content'>
                    <h3>Visit our location</h3>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
                    <br/>
                    <h3>Message Us</h3>
                    <span>info@eample.com</span>
                    <br/>
                    <span>+02 23 33434</span>
                    <br/>
                    <div className='icon'>
                        <h3>Follow Us</h3>
                        <div className='flex_space'>
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-linkedin'></i>
                            <i className='fab fa-instagram'></i>
                            <i className='fab fa-pinterest'></i>
                            <i className='fab fa-youtube'></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='show-data'>
            {allValue.map((currentValue)=> {
                const {fname,lname,phone,email,subject,company,message} = currentValue 
                return (

              
            <div className='sign-box'>
                <h1>Send Successfully</h1>

                <h3> First Name : <p>{fname }</p></h3>

                <h3>Last Name : <p>{lname }</p> </h3>

                <h3>phone : <p>{phone }</p> </h3>

                <h3>email : <p>{email }</p> </h3>

                <h3>subject : <p>{subject }</p> </h3>

                <h3>company : <p>{company }</p> </h3>

                <h3>message: <p>{message }</p> </h3>





            </div>
              )
            })}
        </section>
    </div>
  )
}

export default ContactFrom