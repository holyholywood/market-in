import DetailProductDescription from "@/app/components/molecules/DetailProductDescription";
import CheckoutPanel from "@/app/components/organisms/CheckoutPanel";
import DetailProductGallery from "@/app/components/organisms/DetailProductGallery";
import { countPriceAfterDiscount, formatCurrency } from "@/lib/helpers/number";
import React, { use } from "react";
import { HiStar } from "react-icons/hi2";

const getProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};
const ProductPage = ({ params }: { params: { [key: string]: string } }) => {
  const id = params.productID;
  const productData: productDataType = use(getProduct(id));
  return (
    <div className="min-h-screen">
      <div className="flex gap-4 relative ">
        <figure className="basis-4/12 h-fit space-y-4 sticky top-28 left-0">
          <DetailProductGallery
            thumbnail={productData.thumbnail}
            images={productData.images}
            title={productData.title}
          />
        </figure>
        <div className="basis-5/12">
          <div className="text-2xl font-bold mb-2">{productData.title}</div>
          <div className="flex items-center gap-3">
            <div className="">Tersisa {productData.stock}</div>
            <div>•</div>
            <div className="flex gap-1 items-center">
              <HiStar className="text-yellow-500" /> {productData.rating}
            </div>
          </div>
          <div className="my-4 space-y-2">
            <div className="text-3xl font-bold">
              {formatCurrency(
                countPriceAfterDiscount(
                  productData.price * 15000,
                  productData.discountPercentage
                )
              )}
            </div>
            <div className="">
              <span className="bg-red-200 text-red-700 py-0.5 px-1 font-semibold rounded">
                {Math.round(productData.discountPercentage)}%
              </span>
              <span className="line-through ml-1 text-gray-400">
                {formatCurrency(productData.price * 15000)}
              </span>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-300 my-8"></div>
          <div>
            <h2 className="font-bold text-lg">Deskripsi</h2>
            <DetailProductDescription description={productData.description} />
          </div>
        </div>
        <div className="basis-4/12">
          <div className="border border-gray-300 rounded-lg py-6 px-4">
            <CheckoutPanel
              stock={productData.stock}
              price={productData.price}
              currentPrice={countPriceAfterDiscount(
                productData.price * 15000,
                productData.discountPercentage
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

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
