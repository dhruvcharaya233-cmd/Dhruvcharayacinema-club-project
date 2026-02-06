import React from 'react';

const Header=()=>{
    return(<div>
<header className='flex items-center flex-col bg-black 
text-white shadow-lg py-6' >
        <h1 className='uppercase text-3xl tracking-widest
        text-red-100'>Cinema Club, IIT Roorkee</h1>
        <div>
            <p className='mt-2 italic text-gray-300'>Curated films for curious minds</p>
        </div>
        
      </header>
    </div>)
}

export default Header