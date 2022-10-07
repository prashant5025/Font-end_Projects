import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Img from '../assets/Spense.png'
import Img2 from '../assets/YelpCamp.png'

const Hero = () => {
    return (
        <div className='w-full mx-auto h-full text-gray-400 bg-[#0b0c0b] px-8'>
            <div className='text-5xl text-white pt-4 h-auto w-auto p-2 leading-[60px] px-4'>
                <h1 className='w-full md:w-[556px] font-serif mt-8'>Helping companies build better, scable software.</h1>
            </div>

            <div className='w-auto mt-2 p-4'>
                <p className='md:w-[440px] text-medium'>Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more.</p>

            </div>

            <div className='grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3 mt-8 items-center'>
                <p className='text-2xl text-center py-4'>Walmart</p>
                <p className='text-2xl text-center py-4 font-serif font-thin'>J.P.Morgan</p>
                <p className='text-2xl text-center py-4 font-bold'>VISA</p>
                <p className='text-2xl text-center py-4'>🔥tinder</p>
                <p className='text-2xl text-center py-4 font-bold uppercase tracking-widest '>samsung</p>
                <p className='text-2xl text-center py-4 font-bold '>verizon</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 px-4 w-auto'>
                <div>
                    <img className='object-cover px-2' src={Img} alt="img"  width={920} height={350}/>
                    <div className='flex gap-4'>

                        <h1 className='text-3xl font-serif text-white py-2 my-8'>Spence.com</h1>
                        <BsArrowRight className='my-12' size={24} />
                    </div>
                    <p className='text-medium text-start overflow-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ea cupiditate delectus porro, laboriosam voluptatum totam dolorem dolores explicabo exercitationem hic quo earum amet aut cum asperiores, repellendus velit facilis.</p>

                </div>
                <div>
                    <img className='object-cover px-2' src={Img2} alt="img"  width={920} height={350}/>
                    <div className='flex gap-4'>

                        <h1 className='text-3xl font-serif text-white py-2 my-8'>Spence.com</h1>
                        <BsArrowRight className='my-12' size={24} />
                    </div>
                    <p className='text-medium text-start overflow-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ea cupiditate delectus porro, laboriosam voluptatum totam dolorem dolores explicabo exercitationem hic quo earum amet aut cum asperiores, repellendus velit facilis.</p>

                </div>
            </div>
        </div>
    )
}

export default Hero