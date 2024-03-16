import Banner from '@/app/components/banner'
import CallNow from '@/app/components/callNow'
import CompSlider from '@/app/components/compSlider'
import Footer from '@/app/components/footer'
import SimpleComp from '@/app/components/simpleComp'
import ThermalComp from '@/app/components/thermalComp'
import ThermalImg from '@/app/components/thermalImg'
import React from 'react'

function Page() {
  return (
    <>
    
    <ThermalImg/>
    <CallNow/>
    <ThermalComp/>
    <CompSlider/>
    <SimpleComp/>
    <Banner/>
    <Footer/>
    
    </>
  )
}

export default Page