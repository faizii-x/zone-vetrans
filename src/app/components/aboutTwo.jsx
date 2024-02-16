import React from "react";
import Aboutbg from "../../../public/png/aboutbg.png";

function AboutTwo() {
  return (
    <>
      <div
      className="div-setting-sm"
        style={{
          backgroundImage: `url(${Aboutbg.src})`,
          marginTop: "40px",
          padding: "90px",
        }}
      >
        <h3 className="text-[26px] font-bold font-poppins text-white">Our Valuable clints</h3>
        <p className="text-[22px] font-light text-white mt-3">
          Through our experience in a diverse range of projects, from
          small-scale construction to multi-million dollar evaluations, we have
          reliably provided construction cost estimates to numerous companies
          worldwide. Our commitment to quality, timely deliveries, and
          exceptional customer support has allowed us to establish long-lasting
          relationships with our clients, making us their go-to source for all
          estimating needs. We support design firms by understanding the unique
          requirements of each project, producing construction cost estimate
          reports at crucial design stages, offering value engineering guidance,
          and identifying errors during the design process. Additionally, we
          work closely with contracting companies in USA, delivering highly
          accurate bid estimates, advising on strategic bidding proposals, and
          assisting with price negotiations.
        </p>
      </div>
    </>
  );
}

export default AboutTwo;
