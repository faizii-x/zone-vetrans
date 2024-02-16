import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import EstimateComp from '../components/estimateComp'
import EstimateTwo from '../components/estimateTwo'
import Package from '../components/package'
import Banner from '../components/banner'

function Page() {
  return (
    <>
    <Navbar/>
    <EstimateComp/>
    <EstimateTwo/>
    <Package/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default Page