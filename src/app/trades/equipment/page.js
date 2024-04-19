import Banner from '@/app/components/banner'
import BlackEquip from '@/app/components/blackEquip'
import CallNow from '@/app/components/callNow'
import CompSlider from '@/app/components/compSlider'
import EquipImg from '@/app/components/equipImg'
import SimpleComp from '@/app/components/simpleComp'
import TextComp from '@/app/components/textComp'
import React from 'react'

function Page() {
  return (
    <>
    
    <EquipImg/>
    <BlackEquip/>
    <CallNow/>
    <TextComp/>
    <CompSlider/>
    <SimpleComp/>
    <Banner/>
    </>
  )
}

export default Page