import React from 'react'
import {FaArrowDown}  from 'react-icons/fa'

function Hero() {
  return (
    <div id='hero' className='w-full h-full flex relative'>
        <div id='left' className='w-full h-screen bg-[#1E3847] flex flex-2 items-center px-16'>
            <div id='leftDetails' className='text-[#EFF6FC]  w-150'>
                <h2 className='text-5xl font-bold'>Design Your Home <br/>With Modern Interior</h2>
                <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button className='bg-[#FEE7D5] text-[#1E3847] text-md mt-8 px-10 py-2 rounded-2xl font-semibold cursor-pointer'>Contact Us</button>
            </div>
        </div>
        <div id='right' className='w-full h-screen flex flex-1 items-center '>
          <div className='absolute mr-16 right-0 mr-[52px]  z-10'>
            <img src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt=''
            className='w-140 h-80 object-cover'
            />
          </div>
          <div className='w-10 h-10 bg-[#1E3847] flex items-center justify-center z-10 mt-80 ml-70 cursor-pointer'>
            <FaArrowDown className='text-white'/>
          </div>
        </div>
    </div>
  )
}

export default Hero
