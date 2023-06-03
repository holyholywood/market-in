import React from "react";
import BrandText from "../atoms/BrandText";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillCartFill, BsFillEnvelopeFill, BsBellFill } from "react-icons/bs";
import Image from "next/image";
import { limitText } from "@/lib/helpers/string";
import CategoryPill from "../atoms/CategoryPill";
const dummyCategory = ["Smartphone", "Laptops", "Desktop"];
const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg h-20 flex px-12 py-2 text-sm justify-between">
      <div className="w-fit pt-1">
        <BrandText />
      </div>
      <div className="w-full max-w-3xl  mx-auto ">
        <SearchInput />
        <div className="flex items-center gap-2 mt-2">
          {dummyCategory.map((el) => {
            return <CategoryPill key={el}>{el}</CategoryPill>;
          })}
        </div>
      </div>
      <div className="pt-1 text-gray-500 flex items-center gap-4 h-fit text-lg">
        <button className="rounded-lg p-1 items-center justify-center flex hover:bg-gray-100 duration-100">
          <BsFillCartFill className="inline" />
        </button>
        <button className="rounded-lg p-1 items-center justify-center flex hover:bg-gray-100 duration-100">
          <BsBellFill className="inline" />
        </button>
        <button className="rounded-lg p-1 items-center justify-center flex hover:bg-gray-100 duration-100">
          <BsFillEnvelopeFill className="inline" />
        </button>
        <div className="inline-flex  items-center pt-1 gap-1">
          <Image
            src="https://i.pravatar.cc/24"
            alt="user avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm">{limitText("Ditotisi Rasyid Sumpena", 10)}</span>
        </div>
      </div>
    </nav>
  );
};

const SearchInput = () => {
  return (
    <div className="relative">
      <IoSearchOutline className="absolute top-2 left-2 text-gray-500" />
      <input
        type="text"
        placeholder="Cari di Market-in"
        className="rounded border w-full focus:border-green-400 focus:outline-none border-gray-300 px-4 pl-8 py-1"
      />
    </div>
  );
};
export default Navbar;
