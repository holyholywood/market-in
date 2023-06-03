"use client";
import Image from "next/image";
import React, { useState } from "react";

type DetailProductGalleryPropsType = {
  thumbnail: string;
  images: string[];
  title: string;
};
const DetailProductGallery = ({ thumbnail, images, title }: DetailProductGalleryPropsType) => {
  const [displayImage, setDisplayImage] = useState(thumbnail);
  const handleMouseEnter = (imgpath: string) => {
    setDisplayImage(imgpath);
  };
  const handleMouseLeave = () => {
    setDisplayImage((prev) => prev);
  };
  return (
    <>
      <div className=" rounded relative overflow-hidden h-80">
        <Image
          src={displayImage}
          fill
          style={{ objectFit: "contain" }}
          alt={`${title} thumbnail`}
          sizes="1px"
        />
      </div>
      <div className="grid grid-cols-5 gap-2 relative">
        {images.map((el, i) => {
          return (
            <div
              onMouseEnter={() => handleMouseEnter(el)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => setDisplayImage(el)}
              className="w-full relative overflow-hidden p-[4px] rounded hover:outline outline-[1px] outline-green-500 aspect-square bg-black"
              key={i}
            >
              <Image src={el} fill style={{ objectFit: "cover" }} alt={`${title} thumbnail`} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetailProductGallery;
