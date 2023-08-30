import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick=()=>{
      
    }
  return (
    <div>
        <Header/>
        <img className='absolute' alt='bg-img' src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
        <form className='w-3/12 absolute z-10 p-12 bg-black bg-opacity-90 my-36 mx-auto right-0 left-0 text-white rounded-lg '>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer hover:underline' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login
