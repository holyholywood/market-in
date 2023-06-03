import React from "react";

const CategoryPill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-2 py-[1px] rounded-full text-xs border border-gray-400 text-gray-500 font-thin hover:cursor-pointer">
      {children}
    </div>
  );
};

export default CategoryPill;
