"use client"
import Image from 'next/image';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import  Homeimg from "../../../public/Homeimg.png"
import { FaPinterestP } from "react-icons/fa6";
const Homepage = () => {
  return (
    <div className='bg-primary text-[white] lg:flex lg:gap-[100px] lg:px-[100px] px-6 lg:pt-[101px] pt-[50px]' >
      <div className='lg:flex flex-col lg:gap-[100px]  gap-4 lg:w-[25.28px] lg:h-[492px] md:hidden sm:hidden hidden'> 
        <div className='lg:w-[108px] border-[1px] rotate-90 text-whitetext lg:block hidden'></div>
       <div className='text-[] lg:ml-[45px] flex-col justify-between flex gap-[20px] '>
       <a href="https://www.facebook.com/iqranaz993/">< FaFacebookF className='text-whitetext' /></a>
        <FaTwitter className='text-[#FF9F0D] '/>
        <FaPinterestP className='text-[white]'/>
       </div>
        <div className='w-[108px] border-[1px] lg:block hidden rotate-90 text-whitetext'></div>
      </div>
      <div className='lg:w-[472px] w-[300px] lg:h-[356px] rounded-[30px] flex flex-col lg:gap-[20px] gap-[25px] '>
        <h3 className='(Dancing.className) text-[#FF9F0D] font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium '>Its Quick & Amusing!</h3>
        <h1 className='font-helvetica font-bold lg:text-[50px] text-[35px] lg:leading-[68px] text-[white]'><span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality</h1>
        <p className='font-normal text-[16px] leading-6 text-[white] lg:w-[380px] h-[48px] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis esse autem deserun</p>
        <button className='lg:w-[150px] w-[100px] h-[100px] lg:h-[50px] mt-[10px] rounded-[30px] text-[white] bg-[#FF9F0D]'>See Menu</button>
      </div>
      <div>
        <Image src={Homeimg} alt='banner' className='"w-[200px] h-auto lg:w-[600px] lg:h-[430px] object-cover rounded-[20px] lg:rounded-[30px]'/>
      </div>
    </div>
  )
}

export default Homepage