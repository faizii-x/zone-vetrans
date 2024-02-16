import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TradeMap from '../components/tradeMap'
// import TradeSeond from '../components/tradeSeond'

function Page() {
  return (
    <>
    <Navbar/>
    <TradeMap/>
    {/* <TradeSeond/> */}
    <Footer/>
    </>
  )
}

export default Page