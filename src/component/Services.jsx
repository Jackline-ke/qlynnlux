import React, { useEffect } from "react"
import {FaHeadphones, FaShip} from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css"


function Services() {
    useEffect( () =>{
        AOS.init({duration: 2000});
      }, [])
  return (
    <div id='services' className='w-full h-full text-[#1E3847]'>
        <div data-aos="fade-up" className='w-full h-screen flex flex-col md:flex-row gap-16 py-24 lg:py-24 px-10 lg:px-16'>
            <div id='left' className='flex flex-1 grid lg:grid-cols-2 gap-6'>
                <div className='container px-8 py-12 rounded-xl shadow-lg flex flex-col gap-2 items-center text-center'>
                    <FaShip size={28}/>
                    <h2 className='text-xl font-semibold '>Warranty</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
                <div className='container px-8 py-12 rounded-xl shadow-lg flex flex-col gap-2 items-center text-center'>
                    <FaHeadphones size={28}/>
                    <h2 className='text-xl font-semibold '>Warranty</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
                <div className='container px-8 py-12 rounded-xl shadow-lg flex flex-col gap-2 items-center text-center'>
                    <FaShip size={28}/>
                    <h2 className='text-xl font-semibold '>Warranty</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
                <div className='container px-8 py-12 rounded-xl shadow-lg flex flex-col gap-2 items-center text-center'>
                    <FaShip size={28}/>
                    <h2 className='text-xl font-semibold '>Warranty</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
            </div>
            <div id='right' className='flex flex-1 items-center'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold text-4xl'>Benefit You Get When You Use Our Services</h2>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className=''>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='cursor-pointer'>
                        <button className='bg-[#1E3847] text-[#EFF6FC] text-md mt-8 px-10 py-2 rounded-2xl font-semibold cursor-pointer'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
