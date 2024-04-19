import CallNow from "@/app/components/callNow";
import MepBlack from "@/app/components/mepBlack";
import MepImg from "@/app/components/mepImg";
import MepStyle from "@/app/components/mepStyle";
import MepTwo from "@/app/components/mepTwo";
import One from "@/app/components/one";
import SecondCut from "@/app/components/secondCut";
import React from "react";

function Page() {
  return (
    <>
      <MepImg />
      <MepBlack/>
      <One/>
      <MepStyle/>
      <CallNow/>
      <SecondCut/>
      <MepTwo/>
    </>
  );
}

export default Page;
