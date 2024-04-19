import Banner from '@/app/components/banner'
import CallNow from '@/app/components/callNow'
import CompSlider from '@/app/components/compSlider'
import MaterialCards from '@/app/components/materialCards'
import MaterialComp from '@/app/components/materialComp'
import MaterialImg from '@/app/components/materialImg'
import React from 'react'

function Page() {
  return (
    <>
   <MaterialImg/>
   <MaterialCards/>
   <CallNow/>
   <MaterialComp/>
   <CompSlider/>
   <Banner/>
 
    </>
  )
}

export default Page