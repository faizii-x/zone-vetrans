import React from "react";
import Navbar from "../components/navbar";
import AboutComp from "../components/aboutComp";
import Banner from "../components/banner";
import AboutTwo from "../components/aboutTwo";
import Aboutblack from "../components/aboutblack";

function Page() {
  return (
    <>
      <Navbar />
      <AboutComp />
      <AboutTwo/>
      <Aboutblack/>
      <Banner/>
      
    </>
  );
}

export default Page;
