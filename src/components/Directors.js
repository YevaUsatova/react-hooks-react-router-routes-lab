import React from "react";
import { directors } from "../data";

const directorList= directors.map((director)=>{
   return <div key={director.name}>{director.name}
     <ul key={director.name}> <li>{director.movies}</li> </ul> 
    </div>
   });

function Directors() {
  return (
  <>
    <h1>Directors Page</h1>
    {directorList}
  </>
  );
}

export default Directors;
