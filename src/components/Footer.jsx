import React from 'react'

import {BsFacebook,BsInstagram,} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full pt-2 mx-auto h-20 bg-gray-800'>
      <div className='flex justify-between items-center py-4 px-8'>

        <h1 className=' text-2xl text-serif text-gray-100'>Jonathan Specter</h1>

        <div className='flex gap-8'>
            <BsFacebook className='' size={20}/>
            <BsInstagram className='' size={20}/>
            <FaTwitter className='' size={20}/>
        </div>

      </div>
    </div>
  )
}

export default Footer