"use client";
import { TRADES_MAP } from "@/data";
import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

function Page() {
  let carouselRef = useRef(null);

  // const onNextStart = (currentItem, nextItem) => {
  //   if (currentItem.index === nextItem.index) {
  //     carouselRef.current.goTo(0);
  //   }
  // };


  // const onPrevStart = (currentItem, nextItem) => {
  //   if (currentItem.index === nextItem.index) {
  //     carouselRef.current.goTo(TRADES_MAP.length);
  //   }
  // };

  const Loop = (currentItem) => {
    if (currentItem.index == TRADES_MAP.length - 1) {
    setTimeout(() => {
    carouselRef.current.goTo(0);
    }, 1500);
    }
    };

  return (
    <>
    
      <Carousel
        ref={carouselRef}
        onChange={Loop}
        showArrows={false}
        enableAutoPlay={true}
        autoPlaySpeed={1000}
        itemsToShow={5}
        // onPrevStart={onPrevStart}
        // onNextStart={onNextStart}
      >
        {TRADES_MAP.map((item, i) => {
          return (
            <div className="" key={i}>
              <img src={item.text} alt="text" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default Page;
