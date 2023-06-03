import { Titan_One } from "next/font/google";
import Link from "next/link";

const brandFont = Titan_One({ weight: "400", subsets: ["latin"] });

export const BrandText = () => {
  return (
    <Link href={"/"}>
      <h1 className={`${brandFont.className} text-2xl text-green-500 tracking-wider`}>
        Market-In
      </h1>
    </Link>
  );
};

export default BrandText;
