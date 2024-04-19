import Banner from "@/app/components/banner";
import BlackThree from "@/app/components/blackthree";
import CompSlider from "@/app/components/compSlider";
import ConcreteImg from "@/app/components/concreteImg";
import ConcreteText from "@/app/components/concreteText";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <ConcreteImg />
      <BlackThree />
      <ConcreteText/>
      <CompSlider />
      <SimpleComp />
      <Banner />
    
    </>
  );
}

export default Page;
