import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const email=useRef(null);
    const password=useRef(null);
    const userName=useRef(null)

    const handleButtonClick=()=>{
      //console.log(email);
      //console.log(password);
      if(!isSignInForm){
        const message=checkValidData(email.current.value,password.current.value,userName.current.value);
        setErrorMessage(message);
        if(message) return
      }else{
        const message=checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return
      }
      

      if(!isSignInForm){
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)

          updateProfile(user, {
            displayName: userName.current.value, photoURL: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = user;
        // ...
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        }))
            navigate("/browse")
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(Error.message)
            // ...
          });

          // ...
         })
          .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode+"-"+errorMessage)
            // ..
           });
      }else{
        //Sign In Logic
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse")
        // ...
       })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage)
       });
      }
    }
    
    const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header/>
        <img className='absolute' alt='bg-img' src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
        <form onSubmit={(e)=>{
          e.preventDefault()
        }} className='w-3/12 absolute z-10 p-12 bg-black bg-opacity-90 my-36 mx-auto right-0 left-0 text-white rounded-lg '>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input ref={userName} type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button type='Submit' onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer hover:underline' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login
