import React from 'react'
import NavbarImage from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-18 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='flex items-center'>
         <img 
             src={NavbarImage} 
                 alt="Profile" 
                    className='w-12 h-12 rounded-md mr-4' 
         />
        <div className='text-2xl font-bold hidden md:inline'>Md Anamul Habib</div>
        </div>
           
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-600'>Home</a>
                <a href="#about" className='hover:text-gray-600'>About Myself</a>
                <a href="#service" className='hover:text-gray-600'>Services</a>
                <a href="#project" className='hover:text-gray-600'>Projects</a>
                <a href="#contact" className='hover:text-gray-600'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-purple-400 to-blue-700 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </div>
    </nav>
  )
}

export default Navbar