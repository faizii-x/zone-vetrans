import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import InteriorBlack from "@/app/components/interiorBlack";
import InteriorImg from "@/app/components/interiorImg";
import InteriorText from "@/app/components/interiorText";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <InteriorImg />
      <CallNow/>
      <InteriorBlack/>
      <InteriorText/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
      <Footer/>
    </>
  );
}
         
export default Page;
