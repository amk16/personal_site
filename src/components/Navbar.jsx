import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className = "w-full h-15 flex justify-between items-center py-5 px-4 sm:px-16 fixed top-0 z-50 bg-transparent">
        <NavLink to ="/" className = "w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-md ">
            <p className= "text-blue-600">AM</p>
        </NavLink>
        <nav className = "flex text-lg gap-7 font-medium">
            <NavLink to ="/about" className={({isActive}) => isActive ? "text-purple-800 underline" : "text-gray-500"}>About</NavLink>
            <NavLink to ="/contact" className={({isActive}) => isActive ? "text-purple-800 underline" : "text-gray-500"}>Contact</NavLink>
            <NavLink to ="/projects" className={({isActive}) => isActive ? "text-purple-800 underline" : "text-gray-500"}>Projects</NavLink>
        </nav>
        
        
    </header>
  )
}

export default Navbar