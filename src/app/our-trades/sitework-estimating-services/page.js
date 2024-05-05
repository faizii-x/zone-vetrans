import Banner from "@/app/components/banner";
import BlackOne from "@/app/components/blackOne";
import BlackTwo from "@/app/components/blackTwo";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import SimpleComp from "@/app/components/simpleComp";
import SiteCommon from "@/app/components/siteCommon";
import SiteImg from "@/app/components/siteImg";
import React from "react";

function Page() {
  return (
    <>
      <SiteImg />
      <CallNow/>
      <BlackOne/>
      <SiteCommon/>
      <BlackTwo/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
 

</>
  );
}

export default Page;
