import React from 'react'
import Image from 'next/image'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
    return (
        <div className='max-w-[1240px] mx-auto h-full  text-gray-400 bg-[#0b0c0b]'>
            <div className='text-5xl text-white pt-4  h-auto'>
                <div className='w-auto p-2 leading-[60px]'>

                    <h1 className='w-full md:w-[556px] font-serif'>Helping companies build better, scable software.</h1>
                </div>
            </div>

            <div className='w-auto md:w-[440px] mt-2 p-2'>

                <p className=' text-medium'>Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more.</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3  mt-8 items-center'>
                <p className='text-2xl text-center py-4'>Walmart</p>
                <p className='text-2xl text-center py-4 font-serif font-thin'>J.P.Morgan</p>
                <p className='text-2xl text-center py-4 font-bold'>VISA</p>
                <p className='text-2xl text-center py-4'>🔥tinder</p>
                <p className='text-2xl text-center py-4 font-bold uppercase tracking-widest '>samsung</p>
                <p className='text-2xl text-center py-4 font-bold '>verizon</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-8'>
                <div>
                    <Image className='object-cover px-2' src='/../public/assets/Spense.png' alt='img' width={620} height={350} />
                    <div className='flex gap-4'>

                    <h1 className='text-3xl font-serif text-white py-2'>Spence.com</h1>
                    <BsArrowRight className='my-4' size={24}/>
                    </div>
                    <p className='text-medium text-start overflow-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ea cupiditate delectus porro, laboriosam voluptatum totam dolorem dolores explicabo exercitationem hic quo earum amet aut cum asperiores, repellendus velit facilis.</p>

                </div>
                <div>
                    
                    <Image className='object-cover px-2' src='/../public/assets/YelpCamp.png' alt='img' width={620} height={350} />
                    <div className='flex gap-4'>

                    <h1 className='text-3xl font-serif text-white py-2'>Spence.com</h1>
                    <BsArrowRight className='my-4' size={24}/>
                    </div>
                    <p className='text-medium text-start overflow-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ea cupiditate delectus porro, laboriosam voluptatum totam dolorem dolores explicabo exercitationem hic quo earum amet aut cum asperiores, repellendus velit facilis.</p>

                </div>
                
            </div>
        </div>
    )
}

export default Hero
