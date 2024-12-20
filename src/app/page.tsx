import Image from 'next/image'
import Homepage from  "@/components/COMPONENTS/Home"
import Navbar from '@/components/COMPONENTS/Navbar'
import Aboutpage from '../app/About/page'
import Footer from "@/components/COMPONENTS/Footer"
import WhyUs from '@/components/COMPONENTS/WhyUs'
import FoodCategary from '@/components/COMPONENTS/FoodCategary'
import Reviews from '@/components/COMPONENTS/Reviews'
import OurMenu from '@/components/COMPONENTS/OurMenu'
import Chief from '@/components/COMPONENTS/Chief'
import Testimon from '@/components/COMPONENTS/Testimon'
import ActiveStatus from '@/components/COMPONENTS/ActiveStatus'
import Blog from '@/components/COMPONENTS/Blog'
export default function Home() {
  return (
    <div className='bg-primary'>
       
    <Navbar />
    <Homepage />
      <Aboutpage />
      <FoodCategary />
      <WhyUs />
      <Reviews />
      <OurMenu />
      <Chief />
      <Testimon />
      <ActiveStatus />
      <Blog />
      <Footer />

    </div>
  )
}