"use client";
import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";
const ToggleNumber = ({ stock }: { stock: number }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="border border-gray-300 rounded-xl px-1 py-1 flex gap-4 items-center">
      <button
        disabled={count === 1}
        onClick={() => setCount(count > 1 ? count - 1 : count)}
        className="text-center hover:bg-gray-200 duration-500 disabled:hover:bg-transparent rounded h-8 w-8 text-green-600 disabled:cursor-not-allowed disabled:text-gray-400"
      >
        <HiMinus className="mx-auto" />
      </button>
      <span>{count}</span>
      <button
        disabled={count >= stock}
        onClick={() => setCount(count < stock ? count + 1 : count)}
        className="text-center hover:bg-gray-200 duration-500 disabled:hover:bg-transparent rounded h-8 w-8 text-green-600 disabled:cursor-not-allowed disabled:text-gray-400"
      >
        <HiPlus className="mx-auto" />
      </button>
    </div>
  );
};

export default ToggleNumber;
