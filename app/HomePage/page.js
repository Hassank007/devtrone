import React from 'react'
import NavbarM from '../components/NavbarM'
import Navbar from '../components/Navbar'
import Hero from '../components/Homepage/Hero'
import Reviews from '../components/Homepage/Reviews'
import WeWork from '../components/Homepage/WeWork'
import WhatWeOffer from '../components/Homepage/WhatWeOffer'
import Discover from '../components/Homepage/Discover'
import EnsureIt from '../components/Homepage/EnsureIt'

const page = () => {
  return (
    <div>
      <NavbarM/>
      <Navbar/>
      <Hero/>
      <Reviews/>
      <WeWork/>
      <WhatWeOffer/>
      <Discover/>
      <EnsureIt/>
    </div>
  )
}

export default page
