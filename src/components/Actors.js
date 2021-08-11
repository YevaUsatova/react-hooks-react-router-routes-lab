import React from "react";
import { actors } from "../data";

const actorsList=  actors.map((actor)=>{
  return <div key={actor.name}>{actor.name}
    <ul key={actor.name}> <li>{actor.movies} </li> </ul> 
   </div>
  });
function Actors() {
  return (
  <>
    <h1>Actors Page</h1>
    {actorsList}
  </>
  );
}

export default Actors;
