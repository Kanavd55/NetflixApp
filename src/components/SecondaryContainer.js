import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies=useSelector((store)=>store.movies);
  return (movies.nowPlayingMovies && (
    <div className='bg-black w-screen'>
      <div className='-mt-12 relative z-20 pl-12'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popular}/>
        <MovieList title={"Top Rated"} movies={movies.topRated}/>
      </div>
      
    </div>)
  )
}

export default SecondaryContainer
