import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';



const VideoBackground = ({movieId}) => {
  
  const dispatch=useDispatch();
  
  const getMovieVideos=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
    const json=await data.json();
    const filterData=json.results.filter((video)=>{
      return video.type==="Trailer"
    });

    const trailer=filterData.length?filterData[0]:json.results[0];
    console.log(trailer)

    dispatch(addTrailerVideo(trailer));
  }

  useEffect(()=>{
    getMovieVideos()
  },[])


  const trailerVideo=useSelector((store)=>store.movies.trailerVideo);

  

  //"https://www.youtube.com/embed/i78RMNBXsUc?si=1kQqEM5LQiMLrhYr"
  
  return (
    <div className='w-screen'>
      {trailerVideo &&(
      <iframe 
      className='w-screen aspect-video' 
      src={"https://www.youtube.com/embed/"+trailerVideo.key+"?autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>)}
    </div>
  )
}

export default VideoBackground
