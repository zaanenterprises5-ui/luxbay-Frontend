import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";

type ProductCardProps = {
  data: Product;
  priority?: boolean;
  isCircle?: boolean;
};

const ProductCard = ({ data, priority = false, isCircle = false }: ProductCardProps) => {
  return (
    <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      className="flex flex-col items-start w-full aspect-auto group"
    >
      <div
        className={
          isCircle
            ? "relative bg-brand-light rounded-2xl w-[150px] h-[200px] sm:w-[200px] sm:h-[266px] md:w-[240px] md:h-[320px] lg:w-[280px] lg:h-[373px] xl:w-[320px] xl:h-[426px] mx-auto mb-4 overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
            : "relative bg-brand-light rounded-2xl w-full aspect-[4/5] mb-2.5 xl:mb-4 overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300"
        }
      >
        <Image
          src={data.srcUrl}
          fill
          sizes="(max-width: 768px) 50vw, 320px"
          className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
          alt={data.title}
          priority={priority}
        />
      </div>
      <strong className="text-foreground xl:text-xl">{data.title}</strong>
      <p className="text-foreground/70 text-sm xl:text-base">{data.category}</p>
      <div className="flex items-center space-x-[5px] xl:space-x-2.5">
        <span className="font-bold text-brand text-xl xl:text-2xl">
          ₹{data.price}
        </span>
      </div>
    </Link>
  );
};

export default React.memo(ProductCard);
