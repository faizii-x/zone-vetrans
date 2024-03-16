import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import QuantityCards from "@/app/components/quantityCards";
import QuantityImg from "@/app/components/quantityImg";
import QuantityResponsive from "@/app/components/quantityResponsive";
import QuantityStyle from "@/app/components/quantityStyle";
import React from "react";

function Page() {
  return (
    <>
      <QuantityImg />
      <CallNow />
      <QuantityStyle />
      <QuantityCards />
      <QuantityResponsive />
      <CompSlider />
      <Banner />
      <Footer />
    </>
  );
}

export default Page;
