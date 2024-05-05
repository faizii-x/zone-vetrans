import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import CostStyle from "@/app/components/costStyle";
import QuantityCards from "@/app/components/quantityCards";
import QuantityImg from "@/app/components/quantityImg";
import QuantityResponsive from "@/app/components/quantityResponsive";
import ResponsiveComp from "@/app/components/responsiveComp";
import React from "react";

function Page() {
  return (
    <>
      <QuantityImg />
      <CallNow />
      <CostStyle/>
      <ResponsiveComp/>
      <QuantityCards />
      <QuantityResponsive />
      <CompSlider />
      <Banner />
      
    </>
  );
}

export default Page;
