import { use } from "react";
import SectionTitle from "../atoms/SectionTitle";
import ProductCard from "../molecules/ProductCard";
import Link from "next/link";

type ItemGroupPropsType = {
  categoryName: string;
};

const getProduct = async (categoryName: string) => {
  const res = await fetch(`https://dummyjson.com/products/category/${categoryName}?limit=5`);
  return res.json();
};
const ItemGroup = ({ categoryName }: ItemGroupPropsType) => {
  const productsData: ApiproductDataType = use(getProduct(categoryName));
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <SectionTitle>{categoryName.replaceAll("-", " ")}</SectionTitle>
        <Link
          href={`/categories/${categoryName}`}
          className="text-lg text-green-600 hover:underline hover:text-green-700 duration-300 font-semibold"
        >
          Lihat lainnya
        </Link>
      </div>
      <div className="grid grid-cols-5 mt-6 gap-x-4 gap-y-8">
        {productsData.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ItemGroup;

type ApiproductDataType = {
  products: productDataType[];
};
type productDataType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
