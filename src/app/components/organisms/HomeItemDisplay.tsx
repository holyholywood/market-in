import React, { use } from "react";
import ItemGroup from "./ItemGroup";
import Divider from "../atoms/Divider";

const getCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  return res.json();
};
const HomeItemDisplay = () => {
  const categories: string[] = use(getCategories());
  return (
    <div className="w-full space-y-8">
      {categories.map((el, i) => {
        return (
          <div key={i} className="w-full space-y-8">
            <ItemGroup categoryName={el} />
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default HomeItemDisplay;
