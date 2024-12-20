import Image from 'next/image'
import React from 'react'
import Image1 from "../../../public/Categary1.png"
import Image2 from "../../../public/Categary2.png"
import Image3 from "../../../public/Categary3.png"
import Image4 from "../../../public/Categary4.png"

const FoodCategary = () => {
  return (
    <div className='lg:mt-[100px] lg:px-[100px] text-[white] '>
    <h1 className='text-[#FF9F0D] text-center font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium'>Food Category</h1>
    <h1 className='font-helvetica  font-bold text-center lg:text-[40px] text-[30px] leading-[45px] text-[white]'><span className='text-[#FF9F0D]'>Ch</span>oose Food Iteam</h1>
    <div className='flex lg:flex-row flex-col gap-3 lg:px-[100px] sm:justify-center px-6  pt-[30px]'>
    <Image src={Image1} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
    <Image src={Image2} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]'/>
    <Image src={Image3} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]'/>
    <Image src={Image4} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]'/>
    </div>
    </div>
  )
}

export default FoodCategary