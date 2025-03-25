import React from 'react'
import Hero from '../components/Services/Hero'
import ServiceContent from '../components/Services/ServiceContent'
import LeadingSection from '../components/Services/Leading'
import StatsSection from '../components/Services/SayGoodbye'
import TechCarousel from '../components/Services/TechCarousel'
import Cost from '../components/Services/Cost'
import BusinessTypesPage from '../components/Services/BusinessTypesCarousel'
import WebAppDevelopment from '@/app/components/Services/WebAppDevelopment'
import HiringModelsPage from '../components/Services/HiringModel'

import FeaturedRow from '../components/Services/ArticleSection'
import GuidePage from '../components/Services/GuidePage'
import Faq from '../components/Services/Faq'
import ConsultationSection from '../components/ContactForm'
import Footer from '../Footer'

const page = () => {
  return (
    <div>
      <Hero/>
      <ServiceContent/>
      <LeadingSection/>
      <StatsSection/>
      <TechCarousel/>
      <Cost/>
      <BusinessTypesPage/>
      <WebAppDevelopment/>
      <HiringModelsPage/>
      <FeaturedRow/>
      <GuidePage/>
      <Faq/>
      <ConsultationSection/>
      <Footer/>
    </div>
  )
}

export default page
