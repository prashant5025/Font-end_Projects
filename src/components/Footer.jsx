import React from 'react'

import {BsFacebook,BsInstagram,} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name='footer' className='w-full pt-2 mx-auto h-20 bg-gray-800'>
      <div className='flex justify-between items-center py-4 px-8'>

        <h1 className=' text-2xl text-serif text-gray-100 cursor-pointer'>Jonathan Specter</h1>
        <p>&copy; 2022 Prashant Singh</p>

        <div className='flex gap-8'>
            <BsFacebook className='text-gray-400 hover:text-blue-500 ease-in-out duration-200 cursor-pointer' size={20}/>
            <BsInstagram className='text-gray-400 hover:text-pink-500 ease-in-out duration-200 cursor-pointer' size={20}/>
            <FaTwitter className='text-gray-400 hover:text-blue-400 ease-in-out duration-200 cursor-pointer' size={20}/>
        </div>

      </div>
    </div>
  )
}

export default Footer