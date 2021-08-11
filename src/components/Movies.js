import React from "react";
import { movies } from "../data";

  const movieList = movies.map((movie)=> 
{ return <div key={movie.title} >{movie.title} {movie.time}
  <ul >
    <li > {movie.genres.map((genre)=> <ul key={genre}><li >{genre}</li></ul>)}</li>
  </ul>
  </div>
})
function Movies() {
  return (
    <>
    <h1>Movies Page</h1>
     {movieList} 
    </>
  );
}

export default Movies;
