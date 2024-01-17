import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('', values)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  return (
    <div>
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-3 rounded w-25 border loginForm">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" onChange={e => setValues({...values, email: e.target.value})} name="email" placeholder='Enter Email' className='form-control rounded-0' autoComplete='off'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="email" onChange={e => setValues({...values, email: e.target.value})} name="password" placeholder='Enter Password' className='form-control rounded-0'/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                    <p>You are agree to our terms and policies</p>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login