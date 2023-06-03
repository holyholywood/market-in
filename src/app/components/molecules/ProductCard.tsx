import React from "react";
import Image from "next/image";
import { MdStore } from "react-icons/md";
import { HiStar } from "react-icons/hi2";
import { countPriceAfterDiscount, formatCurrency } from "@/lib/helpers/number";
import { limitText } from "@/lib/helpers/string";
import Link from "next/link";
const ProductCard = ({ product }: { product: productDataType }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="rounded-lg border shadow-lg w-full overflow-hidden"
    >
      <div className="w-full h-36 relative overflow-hidden object-fill">
        <Image
          src={product.thumbnail}
          alt={`${product.title} image`}
          fill
          className="object-fill bg-black"
        />
      </div>
      <div className="px-2 pt-2 space-y-2  pb-6">
        <div className="text-lg leading-5" h-10>
          {limitText(product.title, 30, true)}
        </div>
        <div className="text-lg font-bold">
          {formatCurrency(
            countPriceAfterDiscount(product.price * 15000, product.discountPercentage)
          )}
        </div>
        <div className="text-xs">
          <span className="bg-red-200 text-red-700 p-1 font-semibold rounded">
            {Math.round(product.discountPercentage)} %
          </span>
          <span className="line-through ml-1">{formatCurrency(product.price * 15000)}</span>
        </div>
        <div className="text-sm flex items-center gap-1 my-2">
          <MdStore className="text-green-600 text-xl" /> <span>{product.brand}</span>
        </div>
        <div className="text-sm flex items-center gap-1">
          <HiStar className="text-yellow-500" />
          {product.rating} | Tersisa {product.stock}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

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
