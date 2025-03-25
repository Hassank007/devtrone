import React from 'react'
import NavbarM from '../components/NavbarM'
import Navbar from '../components/Navbar'
import Hero from '../components/Homepage/Hero'
import Reviews from '../components/Homepage/Reviews'
import WeWork from '../components/Homepage/WeWork'
import WhatWeOffer from '../components/Homepage/WhatWeOffer'
import Discover from '../components/Homepage/Discover'
import EnsureIt from '../components/Homepage/EnsureIt'
import Solutions from '../components/Homepage/Solutions'
import Experience from '../components/Homepage/Experience'
import GotaProject from '../components/Homepage/GotaProject'
import Industries from '../components/Homepage/Industries'
import TechStack from '../components/Homepage/TechStack'
import TechTrends from '../components/Homepage/TechTrends'
import SuccesStory from '../components/Homepage/SuccesStory'
import Featured from '../components/Homepage/Featured'
import Faq from '../components/Homepage/Faq'
import ContactForm from '../components/ContactForm'
import Footer from '../Footer'
const page = () => {
  return (
    <div>
     
      <Hero/>
      <Reviews/>
      <WeWork/>
      <WhatWeOffer/>
      <Discover/>
      <EnsureIt/>
      <Solutions/>
      <Experience/>
      <GotaProject/>
    <Industries/>
    <TechStack/>
    <TechTrends/>
    {/* <SuccesStory/> */}
    <Featured/>
    <Faq/>
    <ContactForm/>
    <Footer/>
      </div>
  )
}

export default page
