"use client";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import React, { useEffect, useState } from "react";
const dummyBanner = [
  "https://picsum.photos/1024/250",
  "https://picsum.photos/1024/251",
  "https://picsum.photos/1024/252",
];
const Carousel = () => {
  const [slideTo, setSlideTo] = useState(0);
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isBack) {
        setSlideTo((prevslideTo) => prevslideTo - 1);
      } else {
        setSlideTo((prevslideTo) => prevslideTo + 1);
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [isBack]);

  useEffect(() => {
    if (slideTo === dummyBanner.length - 1) {
      setIsBack(true);
    } else if (slideTo === 0) {
      setIsBack(false);
    }
  }, [slideTo]);
  return (
    <div className="relative z-10 w-fit h-fit group">
      <button
        onClick={() => {
          setIsBack(true);
          setSlideTo(slideTo > 0 ? slideTo - 1 : 0);
        }}
        className="absolute z-10 bg-white translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-lg text-gray-800 h-10 w-10 flex justify-center items-center rounded-full duration-500 hover:scale-110 shadow-xl -left-4 top-[100px]"
      >
        <HiChevronLeft />
      </button>
      <button
        onClick={() => {
          setIsBack(false);
          setSlideTo(slideTo < dummyBanner.length - 1 ? slideTo + 1 : dummyBanner.length - 1);
        }}
        className="absolute z-10 bg-white -translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-xl text-gray-800 h-10 w-10 flex justify-center items-center rounded-full duration-500 hover:scale-110 shadow-lg -right-4 top-[100px]"
      >
        <HiChevronRight />
      </button>
      <div className="w-[1024px] overflow-hidden h-[250px] border rounded-xl relative">
        <div className="absolute bottom-5 left-10">
          <CarouselNavigator
            setIsBack={setIsBack}
            activeIndex={slideTo}
            slideTo={slideTo}
            length={3}
            setSlideTo={setSlideTo}
          />
        </div>
        <div className="w-[3072px] bg-black flex relative -z-10 items-center">
          {dummyBanner.map((el, i) => {
            return (
              <figure
                className="w-[1024px] h-[250px]  duration-1000"
                style={{ transform: `translateX(-${slideTo}00%)` }}
                key={i}
              >
                <Image src={el} alt={`banner-${++i}`} width={1024} height={250} />
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CarouselNavigator = ({
  activeIndex,
  length,
  slideTo,
  setSlideTo,
  setIsBack,
}: {
  activeIndex: number;
  length: number;
  slideTo: number;
  setSlideTo: React.Dispatch<React.SetStateAction<number>>;
  setIsBack: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length }, (_, i) => i + 1).map((el, index) => {
        return (
          <button
            key={el}
            className={`h-2 w-2 rounded-full border ${
              activeIndex === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              const prev = slideTo;
              setIsBack(prev > index);

              setSlideTo(index);
            }}
          ></button>
        );
      })}
    </div>
  );
};
export default Carousel;
