import React from "react";
import Navbar from "../components/navbar";
import SliderService from "../components/sliderService";
import Footer from "../components/footer";
import Banner from "../components/banner";

function Page() {
  return (
    <>
      <Navbar />
      <SliderService />
      <Banner/>
      <Footer />
    </>
  );
}

export default Page;
