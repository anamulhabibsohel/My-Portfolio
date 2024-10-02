import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-black text-white py-22" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-26">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Discuss</h3>
            <p>I am interested to engage web development projects and partnership opportunities with clients.
               I am eagerly waiting for holding a job position in this area.
               Please let me know if you have any job opportunities to discuss.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-600 mr-2'></FaEnvelope>
                <a href="mailto:anamulhabibsohel@gmail.com" className='hover:underline'>
                    anamulhabibsohel@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-500 mr-2'></FaPhone>
                <span>+16470001111</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-500 mr-2'></FaMapMarkedAlt>
                <span>1 Yonge Street, Toronto, ON, Canada</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>First Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-600'
                    placeholder='Enter Your First Name'/>
                </div>
                <div>
                    <label htmlFor="name" className='block mb-2'>Last Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Last Name'/>
                </div>
                <div>
                    <label htmlFor="name" className='block mb-2'>Cell Number</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Contact Number'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email Address</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter Your Message'/>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact