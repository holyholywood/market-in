import Link from "next/link";
import React, { use } from "react";
import SectionTitle from "../atoms/SectionTitle";
const dummyVCatagories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];
const categoryBackgroundColor = [
  "bg-red-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-purple-500",
  "bg-red-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-purple-500",
  "bg-red-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-purple-500",
  "bg-red-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-purple-500",
];
const getCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  return res.json();
};
const SelectedCategory = () => {
  const categories: string[] = use(getCategories());
  return (
    <div className="border shadow-xl w-full h-fit bg-transparent rounded-xl py-4 px-6">
      <SectionTitle>Kategori Pilihan</SectionTitle>
      <div className="w-full grid grid-cols-5 gap-4 mt-6">
        {categories.map((el, i) => {
          return <CategoryItem key={i} index={i} categoryName={el} />;
        })}
      </div>
    </div>
  );
};

const CategoryItem = ({ categoryName, index }: { categoryName: string; index: number }) => {
  return (
    <Link
      href={`/categories/${categoryName}`}
      className="rounded border shadow-lg flex gap-2 items-center overflow-hidden"
    >
      <div className={`w-1 h-full ${categoryBackgroundColor[index]}`}></div>
      <span className="text-gray-500 py-1 capitalize">
        {categoryName.replaceAll("-", " ")}
      </span>
    </Link>
  );
};
export default SelectedCategory;
