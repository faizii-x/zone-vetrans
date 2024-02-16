import React from 'react'
import Footer from '../components/footer'
import ConstructionImg from '../components/constructionImg'
import Bullets from '../components/bullets'
import CompSlider from '../components/compSlider'
import Banner from '../components/banner'
import SimpleComp from '../components/simpleComp'

function Page() {
  return (
    <>
    <ConstructionImg/>    
    <Bullets/>
    <CompSlider/>
    <SimpleComp/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default Page