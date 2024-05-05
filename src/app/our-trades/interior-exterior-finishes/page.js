import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import InteriorBlack from "@/app/components/interiorBlack";
import InteriorImg from "@/app/components/interiorImg";
import InteriorText from "@/app/components/interiorText";
import SimpleComp from "@/app/components/simpleComp";
// import StyleScreen from "@/app/components/styleScreen";
import React from "react";

function Page() {
  return (
    <>
      <InteriorImg />
      <InteriorBlack/>
      <CallNow/>
      <InteriorText/>
      {/* <StyleScreen/> */}
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
    
    </>
  );
}
         
export default Page;
