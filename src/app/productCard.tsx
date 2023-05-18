import { Product } from "@/types/products";
import Image from "next/image";
import React from "react";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { id, title, price, description, category, image } = product;
    return (
        <div className="flex flex-col bg-white z-30 p-8 h-full rounded-md gap-3 shadow-xl">
            <div className="mx-auto">
                <Image
                    className="object-contain w-[200px] h-[200px]"
                    src={image}
                    width={200}
                    height={200}
                    alt={title}
                />
            </div>
            <p className="text-xs text-gray-400 leading-none capitalize">
                {category}
            </p>
            <h4 className="text-lg font-bold leading-snug">{title}</h4>
            <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
            <div className="mt-auto flex flex-col gap-2 w-full">
                <div className="mx-auto mt-2 text-lg font-medium">{`$ ${price}`}</div>
                <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 py-3 text-white w-full rounded transition duration-200 ease-in-out">
                    Add to Basket
                </button>
            </div>
        </div>
    );
}
