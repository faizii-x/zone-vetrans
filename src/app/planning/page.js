import React from 'react'
import Banner from '../components/banner'
import CompSlider from '../components/compSlider'
import SimpleComp from '../components/simpleComp'
import Footer from '../components/footer'
import PlanningImg from '../components/planningImg'
import PlanElement from '../components/planElement'

function Page() {
  return (
    <>
    <PlanningImg/>
    <PlanElement/>
    <CompSlider/>
    <SimpleComp/>
    <Banner/>
    <Footer/>
    
    </>
  )
}

export default Page