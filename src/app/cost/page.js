import React from "react";
import Footer from "../components/footer";
import CostImage from "../components/costImage";
import CostStyle from "../components/costStyle";
import CallNow from "../components/callNow";
import CardMap from "../components/cardMap";
import Banner from "../components/banner";
import CompSlider from "../components/compSlider";
import ResponsiveComp from "../components/responsiveComp";
import SimpleComp from "../components/simpleComp";

function Page() {
  return (
    <>
     
      <CostImage />
      <CostStyle/>
      <ResponsiveComp/>
      <CallNow/>
      <CardMap/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
      <Footer />
    </>
  );
}

export default Page;
