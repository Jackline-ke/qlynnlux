import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Services from '../component/Services'

function Home() {
  return (
    <div className='font-serif'> 
      <Navbar/>
      <Hero/>
      <Services/>
        
    </div>
  )
}

export default Home
