import React from 'react'
import NavbarM from '../components/NavbarM'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'

const page = () => {
  return (
    <div>
      <NavbarM/>
      <Navbar/>
      <Hero/>
      <Reviews/>
    </div>
  )
}

export default page
