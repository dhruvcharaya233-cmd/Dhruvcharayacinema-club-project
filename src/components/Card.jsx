import React from 'react'


const Card=({data,selectedgenre,setSelectedGenre})=>{
    

  const filteredMovies = selectedgenre 
    ? data?.filter((movie) => movie.genre === selectedgenre) 
    : data;
   


  
   
  
  return(
 <div className="flex flex-wrap justify-center  gap-6">
     {filteredMovies?.map((movie) =>
      ( <div key={movie.title}
 className="w-48 p-4 bg-gray-200 rounded-lg shadow-md text-center
  transform transition duration-300 hover:scale-105 hover:shadow-xl
   hover:bg-gray-300" > 
   <img src={movie.poster} alt={movie.title}
    className="w-full h-64 object-cover rounded-md transition duration-300
     hover:opacity-90" /> 
     <h2 className="mt-2 font-bold text-lg transition
      duration-300 hover:text-red-600"> {movie.title} </h2>
       <p className="text-sm text-gray-600">{movie.year}</p>
        <p className="text-sm mt-1">{movie.description}</p> </div> ))} </div>
  )
}

export default Card