import React from 'react'

const About = () => {
  return (
    <div className='w-full mx-auto h-full  text-gray-400 bg-slate-600 pt-8 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-8'>
            <div className=''>
                <h2 className='text-4xl font-serif text-white py-4'>A co-founder at one of the world&apos;s largest communities.</h2>
                <p className='font-normal text-sm py-4'>The combined experience I have working at the top Fortune 500 companies has allowed me to develop a skillset that helps me in not just development, but in every aspect of any business.</p>
                <p className='font-normal text-sm py-4'>I'm proud to announce that I am now working at one of the world's largest communities teaching young minds about how to sell yourself as a developer and open them to a whole new world of opportunitie</p>
            </div>
            <div className=''>
                <p className='font-normal text-sm py-4'>As a developer, you have everything available to you and all that's holding you back is yourself</p>

                <p>A quote I live by perfectly illustrates what I mean.</p>
                <p className='font-normal text-sm py-4'>"How big would you dream, if you knew you wouldn't fail?" You've already gone through the hardest parts being a developer, it's time to elevate your skills and become a leader in something you're passionate about.</p>
                <p className='font-normal text-sm py-4'>Im happy to chat over coffee some time about how I can help your company.</p>
            </div>
        </div>


        <div className='bg-[#0b0c0b] h-72 py-4 px-8'>
            <h1 className='text-white text-4xl font-serif mt-12'>Interested in working with me?</h1>
            <p className='py-2 w-auto md:w-[400px]'>I'm active on all social media platforms listed below, but you can also send me an email and i will get back to you within 24-48 hours.</p>
            <button className='py-2 px-4 mt-2'>Get Touch</button>
        </div>

    </div>
  )
}

export default About