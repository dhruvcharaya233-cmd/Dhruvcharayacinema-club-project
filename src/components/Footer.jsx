import React from 'react';
import { FaInstagram } from "react-icons/fa";
import './icon.css'

const Footer=()=>{
    return(<div className='bg-black text-gray-300 py-6 '>
    <div className='flex flex-col items-center space-y-3'>
        <div className='text-sm'> <span className="font-semibold text-red-500"
        >{'\u00A9'} 2026 Cinema Club, IIT Roorkee
            </span>
        </div>
        <div className='icon-container flex items-center space-x-2'>
           <span className='text-sm'> Follow us at </span>
            <FaInstagram className='instagram-icon className="text-pink-500 text-xl cursor-pointer
             hover:text-pink-400 transition duration-300"'/>
        </div>
        </div>



    </div>)
}

export default Footer