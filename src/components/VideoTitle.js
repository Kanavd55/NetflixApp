import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 w-screen aspect-video absolute text-white '>
        <h1 className='text-6xl fontt-bold '>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>   
        <div>
            <button className='bg-gray-500  text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>▶ Play</button>
            <button className='bg-gray-500 mx-2 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button> 
            </div>   
    </div>
  )
}

export default VideoTitle;
