import React from 'react'
import Image from 'next/image'
import {BsFacebook,BsInstagram,} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto h-15 bg-gray-800'>
      <div className='flex justify-between items-center py-4 px-8'>

        <h1 className='font-bold text-xl text-serif'>Footer</h1>

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
