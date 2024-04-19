import Banner from '@/app/components/banner'
import CallNow from '@/app/components/callNow'
import CompSlider from '@/app/components/compSlider'
import SimpleComp from '@/app/components/simpleComp'
import ThermalComp from '@/app/components/thermalComp'
import ThermalImg from '@/app/components/thermalImg'
import ThermalStyle from '@/app/components/thermalStyle'
import Thermo from '@/app/components/thermo'
import Therone from '@/app/components/therone'
import React from 'react'

function Page() {
  return (
    <>
    
    <ThermalImg/>
    <CallNow/>
    <ThermalComp/>
    <Thermo/>
    <Therone/>
    <ThermalStyle/>
    <CompSlider/>
    <SimpleComp/>
    <Banner/>
    
    
    </>
  )
}

export default Page