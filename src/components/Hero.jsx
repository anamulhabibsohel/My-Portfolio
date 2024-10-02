import React from 'react'
import HeroImage from '../assets/image1.png'
import Resume from '../assets/Resume.pdf'
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-18'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-60 h-60 rounded-full object-cover transform 
        transition-transform duration-400 hover:scale-120'/>
        <h1 className='text-4xl font-bold'>
            I am, Md Anamul Habib, a student of Software Engineering Technician Program at Centennial College.
        </h1>
        <p className='mt-4 text-lg text-gray-500'>
        "I want to develop myself to be a web developer and quick learner in this field.<br></br>
         I am dedicated to keeping up with the latest industry trends and continually learning new technologies to develop cutting edge, responsive web applications."
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-purple-400 to-blue-600 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button
            className='bg-gradient-to-r from-purple-600 to-blue-600 text-white
            transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full'>Resume</button>
            </a>
        </div>

    </div>
  )
}

export default Hero