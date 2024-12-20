import Image from 'next/image'
import React from 'react'
import chef1 from "../../../public/chef1.png"
import chef2 from "../../../public/chef2.png"
import chef3 from "../../../public/chef3.png"
import chef4 from "../../../public/chef4.png"
const Chief = () => {
  return (
    <div>
       <div className='lg:mt-[100px] lg:px-[100px] px-6 text-[white]'>
    <h2 className='text-[#FF9F0D] text-center font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium'>Our chefs</h2>
    <h1 className='font-helvetica  font-bold text-center lg:text-[40px] text-[30px] leading-[45px] text-whitetext'><span className='text-[#FF9F0D]'>Ch</span>oose Food Iteam</h1>
    <div className='flex lg:flex-row flex-col gap-3 px-[100px] pt-[30px]'>
    <Image src={chef1} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]' />
    <Image src={chef2} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]'/>
    <Image src={chef3} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]'/>
    <Image src={chef4} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]'/>
    </div>
    </div>
    </div>
  )
}

export default Chief