import AddToCartBtn from "./addToCartBtn";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { id, title, price, description, category, images } = product;
    return (
        <div className="flex flex-col bg-white p-8 h-full rounded-md gap-3 shadow-md">
            <div className="mx-auto">
                <Link href={`/product/${id}`}>
                    <Image
                        className="object-contain w-full h-[200px]"
                        src={images[0]}
                        width={200}
                        height={200}
                        alt={title}
                    />
                </Link>
            </div>
            <p className="text-xs text-gray-400 leading-none capitalize">
                {category}
            </p>
            <Link href={`/product/${id}`}>
                <h4 className="text-lg font-bold leading-snug text-gray-800 hover:underline underline-offset-2">
                    {title}
                </h4>
            </Link>
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {description}
            </p>
            <div className="mt-auto flex flex-col gap-2 w-full">
                <div className="mt-2 text-lg font-medium">{`Price: $${price}`}</div>
                <AddToCartBtn product={product} />
            </div>
        </div>
    );
}
