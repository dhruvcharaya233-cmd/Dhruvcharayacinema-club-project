import React from 'react';
import{useState} from 'react';
import Card from './Card'

const Genre=({data})=>{
    
    const[selectedgenre,setSelectedGenre]=useState('');
    
    
   const genres=[...new Set(data.map((movie)=>movie.genre))]
    return(<div className='w-full bg-gradient-to-r from-black via-gray-900 to-black py-6'>
      <div className='flex flex-col items-center mt-2'>
     <div className='flex justify-center gap-4 mb-4'> 
         {genres&&genres.map((genre,index)=>(
<button className={`px-4 py-2 rounded font-semibold transition
${selectedgenre===genre?'bg-red-600 text-white ':'bg-gray-200 text-black hover:bg-red-400 hover:text-white'}`}
 key={index} onClick={()=>setSelectedGenre(genre)}>{genre}</button>
       ))}</div>

        <button onClick={() => setSelectedGenre("")}
        className="px-4 py-2 rounded font-semibold bg-gray-400 text-white hover:bg-gray-500 mb-6"
      >
        Show All
      </button>
       <div>
        <Card data={data} selectedgenre={selectedgenre} setSelectedGenre={setSelectedGenre}
        />
       </div>
      </div>
      </div>
    )
}

export default Genre;