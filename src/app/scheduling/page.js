import React from "react";
import ScheduleComp from "../components/scheduleComp";
import Footer from "../components/footer";
import ScheduleText from "../components/scheduleText";
import CompSlider from "../components/compSlider";
import Banner from "../components/banner";
import SimpleComp from "../components/simpleComp";
import CallNow from "../components/callNow";
import Work from "../components/work";
import ScheduleCards from "../components/scheduleCards";

function Page() {
  return (
    <>
      <ScheduleComp />
      <ScheduleText />
      <CallNow/>
      <Work/>
      <ScheduleCards/>
      <CompSlider />
      <SimpleComp/>
      <Banner />
      <Footer />
    </>
  );
}

export default Page;
