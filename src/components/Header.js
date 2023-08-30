import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)

  const handleSignOut=()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className='absolute w-screen px-8 py-4 z-10 bg-gradient-to-b from-black flex justify-between'>
        <img className='w-44' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='logo'/>
        {user && (
          <div className='flex p-2'>
          <img className='w-12 h-12' alt='usericon' src={user?.photoURL}/>
          <button onClick={handleSignOut} className='font-bold text-white hover:underline'>Sign Out</button>
        </div>
        )}
    </div>
  )
}

export default Header
